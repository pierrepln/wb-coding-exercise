import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { ResultComponent } from './result.component';
import { VenueService } from './venue.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
 ],
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent
  ],
  providers: [ VenueService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
