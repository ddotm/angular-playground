import {Component} from '@angular/core';
import _ from 'lodash';
import {AgRendererComponent} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {GridDataService} from '../../grid/grid/grid-data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AgRendererComponent {
  public options: Array<{ id: number, name: string }> = null;

  public selectedOption: string = null;

  public params: ICellRendererParams = null;

  constructor(private gridDataService: GridDataService) {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.gridDataService.getLookupValues(this.params.colDef.cellRendererParams.tableName)
        .subscribe({
          next: (options) => {
            this.options = options;
            this.selectedOption = this.params.data[this.params.colDef.field];
          }
        });
  }

  valueChange($event) {
    const selectedId: number = _.parseInt(this.selectedOption);
    this.params.node.setDataValue(this.params.colDef.field, selectedId);
    const selectedOption = _.find(this.options, {id: selectedId});
    this.params.data[this.params.colDef.field] = selectedOption.name;
  }

  refresh(): boolean {
    return false;
  }

}
