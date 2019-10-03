import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridData} from '../../models/grid-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Array<GridData>> {
    return this.http.get<Array<GridData>>('https://api.myjson.com/bins/15psn9');
  }
}
