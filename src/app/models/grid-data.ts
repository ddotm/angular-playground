import _ from 'lodash';
import {FieldProps} from './field-props';
import {IModel} from './imodel';
import {FormGroup, ValidatorFn} from '@angular/forms';

export enum GridDataPropNames {
  id = 'id',
  itineraryDate = 'itineraryDate',
  artistId = 'artistId',
  artistName = 'artistName',
  showId = 'showId',
  itineraryStatusId = 'itineraryStatusId',
  itineraryStatus = 'itineraryStatus',
  venueId = 'venueId',
  venueName = 'venueName',
  venueCity = 'venueCity',
  venueState = 'venueState',
  venueCountry = 'venueCountry',
  sellableCapacity = 'sellableCapacity',
  promoterId = 'promoterId',
  promoterName = 'promoterName',
  promoterContactId = 'promoterContactId',
  promoterContactName = 'promoterContactName',
  guarantee = 'guarantee',
  currencyId = 'currencyId',
  currency = 'currency',
  ticketCurrencyId = 'ticketCurrencyId',
  ticketCurrency = 'ticketCurrency',
  showTypeId = 'showTypeId',
  showType = 'showType',
  holdPosition = 'holdPosition',
  ticketing = 'ticketing',
  billingId = 'billingId',
  billing = 'billing',
  billingNote = 'billingNote',
  announceDate = 'announceDate',
  onSaleDate = 'onSaleDate',
  generalNote = 'generalNote',
  offerExpiryDate = 'offerExpiryDate',

  selected = 'selected'
}

export interface IGridData {
  id: number;
  itineraryDate: Date;
  artistId: number;
  artistName?: string;
  showId?: number;
  itineraryStatusId: number;
  itineraryStatus?: string;
  venueId?: number;
  venueName?: string;
  venueCity?: string;
  venueState?: string;
  venueCountry?: string;
  sellableCapacity?: number;
  promoterId?: number;
  promoterName?: string;
  promoterContactId?: number;
  promoterContactName?: string;
  guarantee?: number;
  currencyId?: number;
  currency?: string;
  ticketCurrencyId?: number;
  ticketCurrency?: string;
  showTypeId?: number;
  showType?: string;
  holdPosition?: number;
  ticketing?: string;
  billingId?: number;
  billing?: string;
  billingNote?: string;
  announceDate?: Date;
  onSaleDate?: Date;
  generalNote?: string;
  offerExpiryDate?: Date;

  rowOrder?: number;
  selected?: boolean;
}

export class GridData implements IModel, IGridData {
  id: number = 0;
  itineraryDate: Date = null;
  artistId: number = null;
  artistName?: string = null;
  showId?: number = null;
  itineraryStatusId: number = null;
  itineraryStatus?: string = null;
  venueId?: number = null;
  venueName?: string = null;
  venueCity?: string = null;
  venueState?: string = null;
  venueCountry?: string = null;
  sellableCapacity?: number = null;
  promoterId?: number = null;
  promoterName?: string = null;
  promoterContactId?: number = null;
  promoterContactName?: string = null;
  guarantee?: number = null;
  currencyId?: number = null;
  currency?: string = null;
  ticketCurrencyId?: number = null;
  ticketCurrency?: string = null;
  showTypeId?: number = null;
  showType?: string = null;
  holdPosition?: number = null;
  ticketing?: string = null;
  billingId?: number = null;
  billing?: string = null;
  billingNote?: string = null;
  announceDate?: Date = null;
  onSaleDate?: Date = null;
  generalNote?: string = null;
  offerExpiryDate?: Date = null;

  rowOrder?: number = null;
  public selected?: boolean = false;

  constructor(data?: IGridData) {
    if (!_.isEmpty(data)) {
      _.merge(this, data);
    }
  }

  public getFieldProps = (): { [key: string]: FieldProps } => {
    const fieldProps: { [key: string]: FieldProps } = {};

    fieldProps[GridDataPropNames.itineraryDate] = new FieldProps({label: 'Itinerary Date'});
    fieldProps[GridDataPropNames.itineraryStatusId] = new FieldProps({label: 'Itinerary Status'});
    fieldProps[GridDataPropNames.venueId] = new FieldProps({label: 'Venue Name'});
    fieldProps[GridDataPropNames.venueCity] = new FieldProps({label: 'Venue City'});
    fieldProps[GridDataPropNames.venueState] = new FieldProps({label: 'Venue State'});
    fieldProps[GridDataPropNames.venueCountry] = new FieldProps({label: 'Venue Country'});
    fieldProps[GridDataPropNames.sellableCapacity] = new FieldProps({label: 'Sellable Capacity'});
    fieldProps[GridDataPropNames.promoterId] = new FieldProps({label: 'Promoter Name'});
    fieldProps[GridDataPropNames.promoterContactId] = new FieldProps({label: 'Promoter Contact'});
    fieldProps[GridDataPropNames.guarantee] = new FieldProps({label: 'Guarantee'});
    fieldProps[GridDataPropNames.currencyId] = new FieldProps({label: 'Currency'});
    fieldProps[GridDataPropNames.ticketCurrencyId] = new FieldProps({label: 'Ticket Currency'});
    fieldProps[GridDataPropNames.showTypeId] = new FieldProps({label: 'Show Type'});
    fieldProps[GridDataPropNames.holdPosition] = new FieldProps({label: 'Hold Position'});
    fieldProps[GridDataPropNames.ticketing] = new FieldProps({label: 'Ticketing'});
    fieldProps[GridDataPropNames.billingId] = new FieldProps({label: 'Billing'});
    fieldProps[GridDataPropNames.billingNote] = new FieldProps({label: 'Billing Note'});
    fieldProps[GridDataPropNames.announceDate] = new FieldProps({label: 'Announce Date'});
    fieldProps[GridDataPropNames.onSaleDate] = new FieldProps({label: 'On Sale Date'});
    fieldProps[GridDataPropNames.generalNote] = new FieldProps({label: 'General Note'});
    fieldProps[GridDataPropNames.offerExpiryDate] = new FieldProps({label: 'Offer Expiry Date'});

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
