import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from 'navbar';
import {GridModule} from './grid/grid.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownComponent} from './controls/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    GridModule
  ],
  entryComponents: [
    DropdownComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
