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
    gridConfig.sideBar = {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel'
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel'
        }
      ]
    };

    return gridConfig;
  }

  public getColDefs(): Array<IColumnDef> {
    const gridData = new GridData();
    const fieldProps = gridData.getFieldProps();
    const columnDefs: Array<IColumnDef> = [
      {
        colId: GridDataPropNames.itineraryDate,
        headerName: '',
        field: GridDataPropNames.itineraryDate,
        sortable: false,
        filter: true,
        editable: false,
        rowDrag: true,
        pinned: 'left',
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
        editable: false,
        pinned: 'left'
      },
      {
        colId: GridDataPropNames.itineraryStatusId,
        headerName: fieldProps[GridDataPropNames.itineraryStatusId].label,
        field: GridDataPropNames.itineraryStatusId,
        sortable: true,
        filter: true,
        editable: true,
        cellRendererFramework: DropdownComponent
      },
      {
        colId: GridDataPropNames.venueId,
        headerName: fieldProps[GridDataPropNames.venueId].label,
        field: GridDataPropNames.venueId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.venueName,
        headerName: fieldProps[GridDataPropNames.venueName].label,
        field: GridDataPropNames.venueName,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.venueCity,
        headerName: fieldProps[GridDataPropNames.venueCity].label,
        field: GridDataPropNames.venueCity,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.venueState,
        headerName: fieldProps[GridDataPropNames.venueState].label,
        width: 100,
        field: GridDataPropNames.venueState,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.venueCountry,
        headerName: fieldProps[GridDataPropNames.venueCountry].label,
        width: 100,
        field: GridDataPropNames.venueCountry,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.sellableCapacity,
        headerName: fieldProps[GridDataPropNames.sellableCapacity].label,
        width: 100,
        field: GridDataPropNames.sellableCapacity,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.promoterId,
        headerName: fieldProps[GridDataPropNames.promoterId].label,
        width: 100,
        field: GridDataPropNames.promoterId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.promoterContactId,
        headerName: fieldProps[GridDataPropNames.promoterContactId].label,
        width: 100,
        field: GridDataPropNames.promoterContactId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.guarantee,
        headerName: fieldProps[GridDataPropNames.guarantee].label,
        field: GridDataPropNames.guarantee,
        sortable: true,
        filter: true,
        editable: true,
        cellRenderer: (params): string => {
          const bonusAmt: number = params.data[GridDataPropNames.guarantee] || 0;
          if (bonusAmt === 0) {
            return `<span>---</span>`;
          }
          const numOfDollarSigns: number = bonusAmt / 1000;
          const dollarSigns: string = numOfDollarSigns > 3 ? '$$$' : '$';
          return `<span>${dollarSigns} ${bonusAmt}</span>`;
        }
      },
      {
        colId: GridDataPropNames.currencyId,
        headerName: fieldProps[GridDataPropNames.currencyId].label,
        field: GridDataPropNames.currencyId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.ticketCurrencyId,
        headerName: fieldProps[GridDataPropNames.ticketCurrencyId].label,
        field: GridDataPropNames.ticketCurrencyId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.showTypeId,
        headerName: fieldProps[GridDataPropNames.showTypeId].label,
        field: GridDataPropNames.showTypeId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.holdPosition,
        headerName: fieldProps[GridDataPropNames.holdPosition].label,
        field: GridDataPropNames.holdPosition,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.ticketing,
        headerName: fieldProps[GridDataPropNames.ticketing].label,
        field: GridDataPropNames.ticketing,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.billingId,
        headerName: fieldProps[GridDataPropNames.billingId].label,
        field: GridDataPropNames.billingId,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.billingNote,
        headerName: fieldProps[GridDataPropNames.billingNote].label,
        field: GridDataPropNames.billingNote,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.announceDate,
        headerName: fieldProps[GridDataPropNames.announceDate].label,
        field: GridDataPropNames.announceDate,
        sortable: true,
        filter: true,
        editable: true,
        valueFormatter: ColValueFormatters.dateValueFormatter
      },
      {
        colId: GridDataPropNames.onSaleDate,
        headerName: fieldProps[GridDataPropNames.onSaleDate].label,
        field: GridDataPropNames.onSaleDate,
        sortable: true,
        filter: true,
        editable: true,
        valueFormatter: ColValueFormatters.dateValueFormatter
      },
      {
        colId: GridDataPropNames.generalNote,
        headerName: fieldProps[GridDataPropNames.generalNote].label,
        field: GridDataPropNames.generalNote,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        colId: GridDataPropNames.offerExpiryDate,
        headerName: fieldProps[GridDataPropNames.offerExpiryDate].label,
        field: GridDataPropNames.offerExpiryDate,
        sortable: true,
        filter: true,
        editable: true,
        valueFormatter: ColValueFormatters.dateValueFormatter
      }
    ];

    return columnDefs;
  }
}
