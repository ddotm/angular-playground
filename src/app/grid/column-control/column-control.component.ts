import _ from 'lodash';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ColumnApi} from 'ag-grid-community';
import {GridService} from '../grid.service';
import {GridConfig, IColumnDef} from '../grid/grid-config';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-column-control',
  templateUrl: './column-control.component.html',
  styleUrls: ['./column-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnControlComponent implements OnInit {
  @Input() columnApi: ColumnApi;
  @Input() gridConfig: GridConfig;

  public formGroup: FormGroup;
  public formGroup$: Observable<FormGroup>;

  private colVisibility: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder,
              private gridService: GridService) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({});
    const cols = _.filter(this.gridConfig.columnDefs, (colDef: IColumnDef) => {
      return !_.isEmpty(colDef.headerName);
    });
    _.forEach(cols, (columnDef: IColumnDef) => {
      this.colVisibility[columnDef.colId] = true;
      this.formGroup.addControl(columnDef.colId, new FormControl(true));
    });
    this.formGroup$ = of(this.formGroup);
  }

  public getLabel(id: string): string {
    return _.find(this.gridConfig.columnDefs, {colId: id}).headerName;
  }

  public setVisibility(colId: string) {
    this.colVisibility[colId] = this.formGroup.controls[colId].value;
    this.gridService.setColumnVisible(this.columnApi, colId, this.colVisibility[colId]);
  }

}
