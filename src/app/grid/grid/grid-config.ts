export class GridConfig {
  public rowSelection: string = 'multiple';

  public columnDefs: Array<IColumnDef> = [
    {
      headerName: 'Make',
      field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      editable: true
    },
    {
      headerName: 'Model',
      field: 'model',
      sortable: true,
      filter: true,
      editable: true
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: true,
      editable: true
    }
  ];
}

export interface IColumnDef {
  headerName: string;          // header text for the column
  field: string;               // property column binds to in the rowData object
  sortable?: boolean;           // enable/disable sorting
  filter?: boolean;             // enable/disable filtering
  checkboxSelection?: boolean;  // enable/disable row selection
  editable?: boolean;
}
