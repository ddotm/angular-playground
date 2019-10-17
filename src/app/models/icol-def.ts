import {ValueGetterParams} from 'ag-grid-community';

export interface IColumnDef {
  colId: string;                // unique column identifier
  headerName: string;           // header text for the column
  width?: number;               // width of the column
  field: string;                // property column binds to in the rowData object
  sortable?: boolean;           // enable/disable sorting
  filter?: boolean;             // enable/disable filtering
  checkboxSelection?: boolean;  // enable/disable row selection
  editable?: boolean;           // enable/disable editable cells
  rowDrag?: boolean;            // enable/disable row dragging
  valueFormatter?: (params: ValueGetterParams) => any; // Function or expression. Formats the value for display.
  // undefined / null: Grid renders the value as a string.
  // String: The name of a cell renderer component.
  // Class: Direct reference to a cell renderer component.
  // Function: A function that returns either an HTML string or DOM element for display.
  cellRenderer?: any;
  cellRendererFramework?: any; // for custom renderers that are components
}
