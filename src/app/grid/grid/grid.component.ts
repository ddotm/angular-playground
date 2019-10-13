import _ from 'lodash';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GridConfig} from './grid-config';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {GridDataService} from './grid-data.service';
import {map} from 'rxjs/operators';
import {GridData} from '../../models/grid-data';
import {ColumnApi, GridApi, RowNode} from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;

  private gridConfig: GridConfig = new GridConfig();
  private gridConfigSubject: BehaviorSubject<GridConfig> = new BehaviorSubject<GridConfig>(null);
  public gridConfig$: Observable<GridConfig> = this.gridConfigSubject.asObservable();
  public grid$: Observable<{ rowData: Array<GridData>, gridConfig: GridConfig }>;

  public gridServiceData$: Observable<Array<GridData>>;

  public display$: Observable<string>;

  private rowData: Array<GridData> = null;

  constructor(private gridDataService: GridDataService) {
  }

  ngOnInit() {
    this.gridConfigSubject.next(this.gridConfig);
    this.gridServiceData$ = this.gridDataService.get();
    this.display$ = of('');

    this.grid$ = combineLatest([
        this.gridServiceData$,
        this.gridConfig$
      ]
    )
      .pipe(
        map(([rowData, gridConfig]) => {
          this.rowData = rowData; // save the data locally
          return {
            rowData,
            gridConfig
          };
        }));
  }

  getSelectedRows() {
    const selectedNodes: Array<RowNode> = this.gridApi.getSelectedNodes();
    const selectedData: Array<GridData> = _.map(selectedNodes, 'data');
    const selectedDataStringPresentation: string = _.join(_.map(selectedData, (node: GridData) => node.date + ' ' + node.city + ' ' + node.status), ' | ');
    this.display$ = of(selectedDataStringPresentation);
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  public onRowDragMove(event) {
    this.moveGridRows(event);
  }

  public rowDragEnd(event) {
    this.moveGridRows(event);
  }

  private moveGridRows(event) {
    const movingNode = event.node;
    const overNode = event.overNode;
    const rowNeedsToMove: boolean = movingNode !== overNode;
    if (rowNeedsToMove) {
      const movingData = movingNode.data;
      const overData = overNode.data;
      const fromIndex = this.rowData.indexOf(movingData);
      const toIndex = this.rowData.indexOf(overData);
      const newStore = this.rowData.slice();
      this.moveInArray(newStore, fromIndex, toIndex);
      this.rowData = newStore;
      //this.gridServiceData$ = of(this.rowData);
      this.gridApi.setRowData(newStore);
      this.gridApi.clearFocusedCell();
    }
  }

  private moveInArray(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
}
