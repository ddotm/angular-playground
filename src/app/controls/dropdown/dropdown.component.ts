import {Component} from '@angular/core';
import {GridDataPropNames} from '../../models/grid-data';
import _ from 'lodash';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  public options: Array<{ id: number, name: string }> = null;

  public selectedOption: string = null;

  public params: any = null;

  constructor() {
  }

  agInit(params: any): void {
    this.params = params;
    this.options = [{id: 1, name: 'Confirmed'}, {id: 2, name: 'Cancelled'}, {id: 3, name: 'Pending'}, {id: 4, name: 'Hold'}];
    this.selectedOption = this.params.data[GridDataPropNames.itineraryStatusId];
  }

  valueChange($event) {
    const selectedId: number = _.parseInt(this.selectedOption);
    this.params.node.setDataValue(GridDataPropNames.itineraryStatusId, selectedId);
    const selectedOption = _.find(this.options, {id: selectedId});
    this.params.data[GridDataPropNames.itineraryStatus] = selectedOption.name;
  }

  refresh(): boolean {
    return false;
  }

}
