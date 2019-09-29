import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from 'navbar';
import {GridModule} from './grid/grid.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
