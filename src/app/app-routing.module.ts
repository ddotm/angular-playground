import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid/grid.component';

const routes: Routes = [
  {
    path: 'grid',
    component: GridComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        enableTracing: true
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
