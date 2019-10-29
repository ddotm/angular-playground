import {IColumnDef} from './icol-def';
import {GetContextMenuItemsParams, MenuItemDef} from 'ag-grid-community';

export interface IGridConfig {
  rowSelection: string;
  rowDragManaged: boolean;
  animateRows: boolean;
  deltaRowDataMode: boolean;
  rowNodeId: string;
  sideBar?: any;
  frameworkComponents?: any;
  columnDefs: Array<IColumnDef>;
  getRowNodeId: (data) => any;
  suppressClipboardPaste?: boolean;
  enableRangeSelection?: boolean;
  suppressCopyRowsToClipboard?: boolean;
  singleClickEdit?: boolean;
  getContextMenuItems: (menuItemsParams: GetContextMenuItemsParams) => Array<string | MenuItemDef>;
}
