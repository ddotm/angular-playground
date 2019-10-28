import {ValueGetterParams} from 'ag-grid-community';
import moment from 'moment';

export class ColValueFormatters {
  public static dateValueFormatter(params: ValueGetterParams): string {
    // See https://momentjs.com/docs/#/displaying/format/ for other formats
    return moment(params.data[params.colDef.colId])
      .format('ddd, MMM DD YYYY');
  }
}
