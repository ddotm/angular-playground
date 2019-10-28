import {RowSelection} from '../grid/enums/row-selection';
import {IGridConfig} from './igrid-config';
import {IColumnDef} from './icol-def';

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
  public suppressClipboardPaste: boolean = false;
  public enableRangeSelection: boolean = true;

  constructor() {
  }
}
