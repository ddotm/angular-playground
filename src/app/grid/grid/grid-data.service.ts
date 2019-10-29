import _ from 'lodash';
import moment from 'moment';
import {Injectable} from '@angular/core';
import {GridData, GridDataPropNames} from '../../models/grid-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  private readonly data: Array<GridData> = null;

  constructor() {
    const existingData = [
      new GridData({
        id: 1,
        itineraryDate: new Date('2020-01-01:00:00:00'),
        artistId: 15,
        artistName: 'Martha Argerich',
        showId: null,
        itineraryStatusId: 1,
        itineraryStatus: 'Confirmed',
        venueId: 33443,
        venueName: 'Carnegie Hall',
        venueCity: 'New York',
        venueState: 'NY',
        venueCountry: 'USA',
        sellableCapacity: 3000,
        promoterId: 15,
        promoterName: 'Fancy Pants',
        promoterContactId: null,
        promoterContactName: null,
        guarantee: null,
        currencyId: 1,
        currency: 'USD',
        ticketCurrencyId: 1,
        ticketCurrency: 'USD',
        showTypeId: null,
        showType: null,
        holdPosition: null,
        ticketing: null,
        billingId: null,
        billing: null,
        billingNote: null,
        announceDate: null,
        onSaleDate: null,
        generalNote: null,
        offerExpiryDate: null
      })
    ];

    this.data = this.populateMonth(existingData, 2020, 1);
  }

  public get(): Observable<Array<GridData>> {
    return of(this.data);
  }

  public getLookupValues(tableName: string): Observable<Array<{ id: number, name: string }>> {
    switch (tableName) {
      case 'itineraryStatus':
        return of([
          {id: 0, name: null},
          {id: 1, name: 'Confirmed'},
          {id: 2, name: 'Cancelled'},
          {id: 3, name: 'Pending'},
          {id: 4, name: 'Hold'}
        ]);
      case 'currency':
        return of([
          {id: 0, name: null},
          {id: 1, name: 'USD'},
          {id: 2, name: 'CAD'},
          {id: 3, name: 'GBP'}
        ]);
    }
  }

  private populateMonth(gridData: Array<GridData>, year: number, month: number): Array<GridData> {
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM')
      .daysInMonth();
    const daysWithData = _.map(gridData, GridDataPropNames.itineraryDate);
    console.log(daysWithData);
    const twoDigitMonth = month < 10 ? `0${month}` : `${month}`;
    let fakeId = -1;
    for (let i: number = 1; i <= daysInMonth; i++) {
      const twoDigitDay = i < 10 ? `0${i}` : `${i}`;
      const date = new Date(`${year}-${twoDigitMonth}-${twoDigitDay}:00:00:00`);
      if (!_.some(daysWithData, (dayWithData: Date) => {
        return _.isEqual(date, dayWithData);
      })) {
        gridData.push(new GridData({
          id: fakeId--,
          itineraryDate: date,
          artistId: 15,
          itineraryStatusId: 0
        }));
      }
    }

    return _.orderBy(gridData, ['date'], ['asc']);
  }
}
