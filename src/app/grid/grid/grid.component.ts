import _ from 'lodash';
import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {GridConfig} from './grid-config';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {GridDataService} from './grid-data.service';
import {map} from 'rxjs/operators';
import {AgGridAngular} from 'ag-grid-angular';
import {GridData} from '../../models/grid-data';
import {RowNode} from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;

  private gridConfig: GridConfig = new GridConfig();
  private gridSubject: BehaviorSubject<GridConfig> = new BehaviorSubject<GridConfig>(null);
  public gridConfig$: Observable<GridConfig> = this.gridSubject.asObservable();
  public grid$: Observable<{ rowData: Array<GridData>, gridConfig: GridConfig }>;

  public gridServiceData$: Observable<any>;

  public display$: Observable<string>;

  constructor(private gridDataService: GridDataService) {
  }

  ngOnInit() {
    this.gridSubject.next(this.gridConfig);
    this.gridServiceData$ = this.gridDataService.get();
    this.display$ = of('');

    this.grid$ = combineLatest([
        this.gridServiceData$,
        this.gridConfig$
      ]
    )
      .pipe(map(([rowData, gridConfig]) => {
        return {
          rowData,
          gridConfig
        };
      }));
  }

  getSelectedRows() {
    const selectedNodes: Array<RowNode> = this.agGrid.api.getSelectedNodes();
    const selectedData: Array<GridData> = _.map(selectedNodes, 'data');
    const selectedDataStringPresentation: string = _.join(_.map(selectedData, (node: GridData) => node.date + ' ' + node.city + ' ' + node.status), ' | ');
    this.display$ = of(selectedDataStringPresentation);
  }

}
