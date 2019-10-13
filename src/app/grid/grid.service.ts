import {Injectable} from '@angular/core';
import {ColumnApi} from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() {
  }

  public setColumnVisible(columnApi: ColumnApi, colName: string, visible: boolean): void {
    columnApi.setColumnVisible(colName, visible);
  }
}
