import {Injectable} from '@angular/core';
import {ColumnApi} from 'ag-grid-community';
import {GridConfig} from '../models/grid-config';
import {RowSelection} from './enums/row-selection';
import {GridData, GridDataPropNames} from '../models/grid-data';
import {IColumnDef} from '../models/icol-def';
import {ColValueFormatters} from './col-value-formatters';
import {DropdownComponent} from '../controls/dropdown/dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() {
  }

  public setColumnVisible(columnApi: ColumnApi, colName: string, visible: boolean): void {
    columnApi.setColumnVisible(colName, visible);
  }

  public getGridConfig(): GridConfig {
    const gridConfig = new GridConfig();
    gridConfig.rowSelection = RowSelection.multiple;
    gridConfig.rowDragManaged = false;
    gridConfig.animateRows = true;
    gridConfig.deltaRowDataMode = true;
    gridConfig.rowNodeId = GridDataPropNames.id;
    gridConfig.columnDefs = this.getColDefs();
    gridConfig.getRowNodeId = (data: any): any => {
      return data[gridConfig.rowNodeId];
    };
    return gridConfig;
  }

  public getColDefs(): Array<IColumnDef> {
    const gridData = new GridData();
    const fieldProps = gridData.getFieldProps();
    const columnDefs: Array<IColumnDef> = [
      {
        colId: GridDataPropNames.date,
        headerName: '',
        field: GridDataPropNames.date,
        sortable: false,
        filter: true,
        editable: false,
        rowDrag: true,
        valueFormatter: ColValueFormatters.dateValueFormatter
      },
      {
        colId: 'check',
        headerName: '',
        width: 40,
        field: null,
        sortable: false,
        filter: false,
        checkboxSelection: true,
        editable: false
      },
      {
        colId: GridDataPropNames.country,
        headerName: fieldProps[GridDataPropNames.country].label,
        field: GridDataPropNames.country,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.city,
        headerName: fieldProps[GridDataPropNames.city].label,
        field: GridDataPropNames.city,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.venue,
        headerName: fieldProps[GridDataPropNames.venue].label,
        field: GridDataPropNames.venue,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.stage,
        headerName: fieldProps[GridDataPropNames.stage].label,
        field: GridDataPropNames.stage,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.capacity,
        headerName: fieldProps[GridDataPropNames.capacity].label,
        width: 100,
        field: GridDataPropNames.capacity,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.buildingCapability,
        headerName: fieldProps[GridDataPropNames.buildingCapability].label,
        width: 100,
        field: GridDataPropNames.buildingCapability,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.artistFee,
        headerName: fieldProps[GridDataPropNames.artistFee].label,
        width: 100,
        field: GridDataPropNames.artistFee,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.productionFee,
        headerName: fieldProps[GridDataPropNames.productionFee].label,
        width: 100,
        field: GridDataPropNames.productionFee,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.bonuses,
        headerName: fieldProps[GridDataPropNames.bonuses].label,
        width: 100,
        field: GridDataPropNames.bonuses,
        sortable: true,
        filter: true,
        editable: true,
        cellRenderer: (params): string => {
          const bonusAmt = params.data[GridDataPropNames.bonuses] || 0;
          if (bonusAmt === 0) {
            return `<span>---</span>`;
          }
          const numOfDollarSigns = bonusAmt / 1000;
          const dollarSigns: string = numOfDollarSigns > 3 ? '$$$' : '$';
          return `<span>${dollarSigns} ${bonusAmt}</span>`;
        }
      },
      {
        colId: GridDataPropNames.statusId,
        headerName: fieldProps[GridDataPropNames.statusId].label,
        field: GridDataPropNames.statusId,
        sortable: true,
        filter: true,
        editable: true,
        cellRendererFramework: DropdownComponent
      }
    ];

    return columnDefs;
  }
}
