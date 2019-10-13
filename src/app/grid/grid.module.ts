import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import {GridComponent} from './grid/grid.component';
import {CommonModule} from '@angular/common';
import {ColumnControlComponent} from './column-control/column-control.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    GridComponent,
    ColumnControlComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ]
})
export class GridModule {
}
