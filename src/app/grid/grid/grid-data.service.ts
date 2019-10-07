import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridData} from '../../models/grid-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  private readonly data: Array<GridData> = null;

  constructor(private http: HttpClient) {
    this.data = [
      new GridData({
        id: 1,
        date: new Date('2019-01-01:00:00:00'),
        country: 'United States',
        city: 'New York',
        venue: 'Carnegie Hall',
        capacity: 3000,
        status: 'confirmed'
      }),
      new GridData({
        id: 2,
        date: new Date('2019-01-02:00:00:00'),
        country: 'United States',
        city: 'New York',
        venue: 'Carnegie Hall',
        capacity: 3000,
        status: 'pending'
      }),
      new GridData({
        id: 3,
        date: new Date('2019-01-03:00:00:00'),
        country: 'United States',
        city: 'New York',
        venue: 'Carnegie Hall',
        capacity: 3000,
        status: 'pending'
      }),
      new GridData({
        id: 4,
        date: new Date('2019-01-04:00:00:00')
      }),
      new GridData({
        id: 5,
        date: null //new Date('2019-01-04:00:00:00')
      }),
      new GridData({
        id: 6,
        date: new Date('2019-01-05:00:00:00')
      }),
      new GridData({
        id: 7,
        date: new Date('2019-01-06:00:00:00')
      }),
      new GridData({
        id: 8,
        date: new Date('2019-01-07:00:00:00')
      }),
      new GridData({
        id: 9,
        date: new Date('2019-01-08:00:00:00'),
        country: 'United States',
        city: 'Los Angeles',
        venue: 'The Greek Theater',
        capacity: 5870,
        status: 'confirmed'
      })
    ];
  }

  public get(): Observable<Array<GridData>> {
    //return this.http.get<Array<GridData>>('https://api.myjson.com/bins/15psn9');
    return of(this.data);
  }
}
