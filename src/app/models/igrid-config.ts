import {IColumnDef} from './icol-def';

export interface IGridConfig {
  rowSelection: string;
  rowDragManaged: boolean;
  animateRows: boolean;
  deltaRowDataMode: boolean;
  rowNodeId: string;
  columnDefs: Array<IColumnDef>;
  getRowNodeId: (data) => any;
}