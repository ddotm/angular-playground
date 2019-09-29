import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) {
  }

  public get() {
    return this.http.get('https://api.myjson.com/bins/15psn9');
  }
}
