import {Component, OnInit} from '@angular/core';
import {GridDataPropNames} from '../../models/grid-data';
import _ from 'lodash';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public options: Array<{ id: number, name: string }> = null;

  public selectedOption: string = null;

  public params: any = null;

  constructor() {
  }

  agInit(params: any): void {
    this.params = params;
    this.options = [{id: 1, name: 'confirmed'}, {id: 2, name: 'cancelled'}, {id: 3, name: 'pending'}, {id: 4, name: 'hold'}];
    this.selectedOption = this.params.data[GridDataPropNames.statusId];
  }

  valueChange($event) {
    const selectedId: number = _.parseInt(this.selectedOption);
    this.params.node.setDataValue(GridDataPropNames.statusId, selectedId);
    const selectedOption = _.find(this.options, {id: selectedId});
    this.params.data[GridDataPropNames.status] = selectedOption.name;
  }

  ngOnInit() {
  }

}
