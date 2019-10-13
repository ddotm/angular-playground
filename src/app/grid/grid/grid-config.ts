import {GridData, GridDataPropNames} from '../../models/grid-data';

export class GridConfig {
  public rowSelection: string = 'multiple';
  public rowDragManaged: boolean = false;
  public animateRows: boolean = true;
  public deltaRowDataMode: boolean = true;
  public rowNodeId: string = 'id';
  public columnDefs: Array<IColumnDef> = null;
  public getRowNodeId = (data) => {
    return data[this.rowNodeId];
  };

  constructor() {
    const gridData = new GridData();
    const fieldProps = gridData.getFieldProps();
    this.columnDefs = [
      {
        headerName: '',
        field: GridDataPropNames.date,
        sortable: false,
        filter: true,
        editable: false,
        rowDrag: true
      },
      {
        headerName: '',
        width: 40,
        field: null,
        sortable: false,
        filter: false,
        checkboxSelection: true,
        editable: false
      },
      {
        headerName: fieldProps[GridDataPropNames.country].label,
        field: GridDataPropNames.country,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.city].label,
        field: GridDataPropNames.city,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.venue].label,
        field: GridDataPropNames.venue,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.stage].label,
        field: GridDataPropNames.stage,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.capacity].label,
        width: 100,
        field: GridDataPropNames.capacity,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.buildingCapability].label,
        width: 100,
        field: GridDataPropNames.buildingCapability,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.artistFee].label,
        width: 100,
        field: GridDataPropNames.artistFee,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.productionFee].label,
        width: 100,
        field: GridDataPropNames.productionFee,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.bonuses].label,
        field: GridDataPropNames.bonuses,
        sortable: true,
        filter: true,
        editable: true
      },
      {
        headerName: fieldProps[GridDataPropNames.status].label,
        field: GridDataPropNames.status,
        sortable: true,
        filter: true,
        editable: true
      }
    ];
  }

}

export interface IColumnDef {
  headerName: string;           // header text for the column
  width?: number;               // width of the column
  field: string;                // property column binds to in the rowData object
  sortable?: boolean;           // enable/disable sorting
  filter?: boolean;             // enable/disable filtering
  checkboxSelection?: boolean;  // enable/disable row selection
  editable?: boolean;           // enable/disable editable cells
  rowDrag?: boolean;            // enable/disable row dragging
}
