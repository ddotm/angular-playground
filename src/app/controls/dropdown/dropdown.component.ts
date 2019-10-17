import {Component, Input, OnInit} from '@angular/core';
import {GridDataPropNames} from '../../models/grid-data';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public options: Array<{ id: number, name: string }> = null;

  public selectedOption: number = null;

  public params: any = null;

  constructor() {
  }

  agInit(params: any): void {
    this.params = params;
    this.options = [{id: 1, name: 'confirmed'}, {id: 2, name: 'cancelled'}, {id: 3, name: 'pending'}];
  }

  valueChange($event) {
    console.log($event);
    this.params.node.setDataValue(GridDataPropNames.statusId, 2);
    // this.params.node.setDataValue(GridDataPropNames.status, 'cancelled');
  }

  ngOnInit() {
  }

}
