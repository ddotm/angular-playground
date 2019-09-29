import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import {GridConfig} from './grid-config';
import {
  BehaviorSubject,
  combineLatest,
  Observable
} from 'rxjs';
import {GridDataService} from './grid-data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  private gridConfig: GridConfig = new GridConfig();
  private gridSubject: BehaviorSubject<GridConfig> = new BehaviorSubject<GridConfig>(null);
  public gridConfig$: Observable<GridConfig> = this.gridSubject.asObservable();
  public grid$;

  public gridServiceData$: Observable<any>;

  constructor(private gridDataService: GridDataService) {
  }

  ngOnInit() {
    this.gridSubject.next(this.gridConfig);
    this.gridServiceData$ = this.gridDataService.get();

    this.grid$ = combineLatest([
        this.gridServiceData$,
        this.gridConfig$
      ]
    )
      .pipe(map(([rowData, gridConfig]) => {
        return {
          rowData,
          gridConfig
        };
      }));

  }

}
