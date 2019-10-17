import _ from 'lodash';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GridConfig} from '../../models/grid-config';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {GridDataService} from './grid-data.service';
import {map} from 'rxjs/operators';
import {GridData, GridDataPropNames} from '../../models/grid-data';
import {ColumnApi, GridApi, RowNode} from 'ag-grid-community';
import {GridService} from '../grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;
  public gridColumnApi$: Observable<ColumnApi>;

  private gridConfig: GridConfig = null;
  private gridConfigSubject: BehaviorSubject<GridConfig> = new BehaviorSubject<GridConfig>(null);
  public gridConfig$: Observable<GridConfig> = this.gridConfigSubject.asObservable();
  public grid$: Observable<{ rowData: Array<GridData>, gridConfig: GridConfig }>;

  public gridServiceData$: Observable<Array<GridData>>;

  public display$: Observable<string>;

  private rowData: Array<GridData> = null;

  constructor(private gridDataService: GridDataService,
              private gridService: GridService) {
  }

  ngOnInit() {
    this.gridConfig = this.gridService.getGridConfig();
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
    const selectedDataStringPresentation: string = _.join(_.map(selectedData, (node: GridData) => node.date + ' ' + node.city + '. Status: ' + node.status), ' | ');
    this.display$ = of(selectedDataStringPresentation);
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi$ = of(params.columnApi);
  }

  public onRowDragMove(event) {
    this.moveGridRows(event);
  }

  public rowDragEnd(event) {
    this.moveGridRows(event);
  }

  private moveGridRows(event) {
    // If overNode has data
    //    node Date set to overNode date and render as an icon
    //    If node's old date has no rows, generate an empty row for the node date
    // If overNode has NO data
    //    If node's old date has no rows, set overNode date to node date
    //    Otherwise, delete overNode
    const movingNode = event.node;
    const overNode = event.overNode;
    const rowNeedsToMove: boolean = movingNode !== overNode;
    if (!rowNeedsToMove) {
      return;
    }
    const nodeData = movingNode.data;
    const overNodeData = overNode.data;
    const fromIndex = _.indexOf(this.rowData, nodeData);
    const toIndex = _.indexOf(this.rowData, overNodeData);
    const newStore = this.rowData.slice();
    this.moveInArray(newStore, fromIndex, toIndex);
    this.rowData = newStore;
    this.gridApi.setRowData(newStore);
    movingNode.setDataValue(GridDataPropNames.date, overNode.data[GridDataPropNames.date]);
  }

  private moveInArray(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
}
