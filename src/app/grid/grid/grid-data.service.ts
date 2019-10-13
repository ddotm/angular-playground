import _ from 'lodash';
import moment from 'moment';
import {Injectable} from '@angular/core';
import {GridData} from '../../models/grid-data';
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
        date: new Date('2020-01-01:00:00:00'),
        country: 'United States',
        city: 'New York',
        venue: 'Carnegie Hall',
        capacity: 3000,
        status: 'confirmed'
      }),
      new GridData({
        id: 2,
        date: new Date('2020-01-02:00:00:00'),
        country: 'United States',
        city: 'New York',
        venue: 'Carnegie Hall',
        capacity: 3000,
        status: 'pending'
      }),
      new GridData({
        id: 3,
        date: new Date('2020-01-03:00:00:00'),
        country: 'United States',
        city: 'New York',
        venue: 'Carnegie Hall',
        capacity: 3000,
        status: 'pending'
      }),
      new GridData({
        id: 9,
        date: new Date('2020-01-08:00:00:00'),
        country: 'United States',
        city: 'Los Angeles',
        venue: 'The Greek Theater',
        capacity: 5870,
        status: 'confirmed'
      }),
      new GridData({
        id: 10,
        date: new Date('2020-01-14:00:00:00'),
        country: 'United States',
        city: 'Los Angeles',
        venue: 'The Greek Theater',
        capacity: 5870,
        status: 'confirmed'
      })
    ];

    this.data = this.populateMonth(existingData, 2020, 1);
  }

  public get(): Observable<Array<GridData>> {
    return of(this.data);
  }

  private populateMonth(gridData: Array<GridData>, year: number, month: number): Array<GridData> {
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM')
      .daysInMonth();
    const daysWithData = _.map(gridData, 'date');
    console.log(daysWithData);
    const twoDigitMonth = month < 10 ? `0${month}` : `${month}`;
    for (let i: number = 1; i <= daysInMonth; i++) {
      const twoDigitDay = i < 10 ? `0${i}` : `${i}`;
      const date = new Date(`${year}-${twoDigitMonth}-${twoDigitDay}:00:00:00`);
      if (!_.some(daysWithData, (dayWithData: Date) => {
        return _.isEqual(date, dayWithData);
      })) {
        gridData.push(new GridData({
          id: 0,
          date: date
        }));
      }
    }

    return _.orderBy(gridData, ['date'], ['asc']);
  }
}
