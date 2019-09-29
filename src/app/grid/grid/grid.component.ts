import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import {GridConfig} from './grid-config';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  private gridConfig: GridConfig = new GridConfig();
  private gridSubject: BehaviorSubject<GridConfig> = new BehaviorSubject<GridConfig>(null);
  public grid$: Observable<GridConfig> = this.gridSubject.asObservable();

  constructor() {
  }

  ngOnInit() {
    this.gridSubject.next(this.gridConfig);
  }

}
