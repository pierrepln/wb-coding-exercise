import { Component, OnInit } from '@angular/core';

import { VenueService } from './venue.service';

@Component({
  selector: 'result',
  template: `<div>{{venues}}</div>`
})
export class ResultComponent  {
  venues: any = [];

  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.venueService.getVenues('london')
      .then(venues => this.venues);
  }
}
