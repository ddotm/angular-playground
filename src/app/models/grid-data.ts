import _ from 'lodash';
import {FieldProps} from './field-props';
import {IModel} from './imodel';
import {FormGroup, ValidatorFn} from '@angular/forms';

export enum GridDataPropNames {
  id = 'id',
  date = 'date',
  country = 'country',
  city = 'city',
  venue = 'venue',
  stage = 'stage',
  capacity = 'capacity',
  buildingCapability = 'buildingCapability',
  artistFee = 'artistFee',
  productionFee = 'productionFee',
  bonuses = 'bonuses',
  statusId = 'statusId',
  status = 'status',

  selected = 'selected'
}

export interface IGridData {
  id: number;
  date?: Date;
  country?: string;
  city?: string;
  venue?: string;
  stage?: string;
  capacity?: number;
  buildingCapability?: number;
  artistFee?: number;
  productionFee?: number;
  bonuses?: number;
  statusId?: number;
  status?: string;

  selected?: boolean;
}

export class GridData implements IModel, IGridData {
  public id: number = 0;
  public date?: Date = null;
  public country?: string = null;
  public city?: string = null;
  public venue?: string = null;
  public stage?: string = null;
  public capacity?: number = null;
  public buildingCapability?: number = null;
  public artistFee?: number = null;
  public productionFee?: number = null;
  public bonuses?: number = null;
  public statusId?: number = null;
  public status?: string = null;

  public selected?: boolean = false;

  constructor(data?: IGridData) {
    if (!_.isEmpty(data)) {
      _.merge(this, data);
    }
  }

  public getFieldProps = (): { [key: string]: FieldProps } => {
    const fieldProps: { [key: string]: FieldProps } = {};

    fieldProps[GridDataPropNames.country] = new FieldProps({label: 'Country'});
    fieldProps[GridDataPropNames.city] = new FieldProps({label: 'City'});
    fieldProps[GridDataPropNames.venue] = new FieldProps({label: 'Venue'});
    fieldProps[GridDataPropNames.stage] = new FieldProps({label: 'Stage'});
    fieldProps[GridDataPropNames.capacity] = new FieldProps({label: 'Capacity'});
    fieldProps[GridDataPropNames.buildingCapability] = new FieldProps({label: 'Budg Cap'});
    fieldProps[GridDataPropNames.artistFee] = new FieldProps({label: 'Artist Fee'});
    fieldProps[GridDataPropNames.productionFee] = new FieldProps({label: 'Production Fee'});
    fieldProps[GridDataPropNames.bonuses] = new FieldProps({label: 'Bonuses'});
    fieldProps[GridDataPropNames.statusId] = new FieldProps({label: 'Status'});

    _.forEach(_.keys(GridDataPropNames), (key: string) => {
      if (_.isEmpty(fieldProps[key])) {
        fieldProps[key] = new FieldProps();
      }
    });

    return fieldProps;
  };

  getValidators = (form: FormGroup): { [p: string]: Array<ValidatorFn> } => {
    const validators: { [key: string]: Array<ValidatorFn> } = {};

    return validators;
  };

  toDto = (): GridData => {
    return this;
  };
}
