import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
