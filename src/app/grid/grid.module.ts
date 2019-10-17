import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import 'ag-grid-enterprise';
import {GridComponent} from './grid/grid.component';
import {CommonModule} from '@angular/common';
import {ColumnControlComponent} from './column-control/column-control.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LicenseManager} from 'ag-grid-enterprise';

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
  constructor() {
    LicenseManager.setLicenseKey('Evaluation_License_Not_For_Production_15_December_2019__MTU3NjM2ODAwMDAwMA==91b82e3be9af4bb0299c9337687abb2f');
  }
}
