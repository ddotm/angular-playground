import _ from 'lodash';

export enum GridDataPropNames {
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
  status = 'status'
}

export interface IGridData {
  date: Date;
  country: string;
  city: string;
  venue: string;
  stage: string;
  capacity: number;
  buildingCapability: number;
  artistFee: number;
  productionFee: number;
  bonuses: number;
  status: string;
}

export class GridData {
  public date: Date = null;
  public country: string = null;
  public city: string = null;
  public venue: string = null;
  public stage: string = null;
  public capacity: number = null;
  public buildingCapability: number = null;
  public artistFee: number = null;
  public productionFee: number = null;
  public bonuses: number = null;
  public status: string = null;

  constructor(data?: GridData) {
    if (_.isEmpty(data)) {
      _.merge(this, data);
    }
  }
}
