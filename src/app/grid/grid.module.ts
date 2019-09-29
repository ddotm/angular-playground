import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import {GridComponent} from './grid/grid.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ]
})
export class GridModule {
}
