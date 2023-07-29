import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxJuliTableModule } from 'ngx-juli-table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJuliTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
