export class GridConfig {
  // public gridOptions: GridOptions = new GridOptions();

  public columnDefs: Array<any> = [
    {
      headerName: 'Make',
      field: 'make',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Model',
      field: 'model',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: true
    }
  ];

  // public rowData: Array<any> = [
  //   {
  //     make: 'Toyota',
  //     model: 'Celica',
  //     price: 35000
  //   },
  //   {
  //     make: 'Ford',
  //     model: 'Mondeo',
  //     price: 32000
  //   },
  //   {
  //     make: 'Porsche',
  //     model: 'Boxter',
  //     price: 72000
  //   }
  // ];
}

export interface IColumnDef {
  headerName: string; // header text for the column
  field: string;      // property column binds to in the rowData object
  sortable: boolean;  // enable/disable sorting
  filter: boolean;    // enable/disable filtering
}
