import {RowSelection} from '../grid/enums/row-selection';
import {IGridConfig} from './igrid-config';
import {IColumnDef} from './icol-def';
import {GetContextMenuItemsParams, MenuItemDef} from 'ag-grid-community';

export class GridConfig implements IGridConfig {
  public rowSelection: string = RowSelection.multiple;
  public rowDragManaged: boolean = true;
  public animateRows: boolean = true;
  public deltaRowDataMode: boolean = true;
  public rowNodeId: string = null;
  public columnDefs: Array<IColumnDef> = new Array<IColumnDef>();
  public getRowNodeId: (data: any) => any;
  public sideBar?: any = null;
  public frameworkComponents?: any = null;
  // Copy/Paste specific settings https://www.ag-grid.com/javascript-grid-clipboard/
  public suppressClipboardPaste?: boolean = false;
  public enableRangeSelection?: boolean = true;
  public suppressCopyRowsToClipboard?: boolean = true;

  public singleClickEdit: boolean = false;

  public getContextMenuItems: (menuItemsParams: GetContextMenuItemsParams) => Array<string | MenuItemDef> = this._getContextMenuItems;

  constructor() {
  }

  private _getContextMenuItems(menuItemsParams: GetContextMenuItemsParams): Array<string | MenuItemDef> {
    return [
      'copy',
      'copyWithHeaders',
      'resetColumns',
      'separator',
      'export',
      'separator',
      {
        name: 'Pin row',
        disabled: false,
        action: () => {
          console.log(menuItemsParams.node.data);
        },
        checked: false,
        subMenu: null,
        cssClasses: null,
        tooltip: 'Click and the row shall be pinned to the top!'
      }
    ];
  }
}
