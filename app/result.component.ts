import { Component, OnInit } from '@angular/core';

import { VenueService } from './venue.service';

@Component({
  selector: 'result',
  template: `
    <div *ngFor="let venue of venues" >
      <h2>{{venue.name}}</h2>
      <p>{{venue.categories[0].name}}</p>
      <p>{{venue.location.address}}, {{venue.location.city}}</p>
      <p>{{venue.rating}}</p>
      <hr/>
    </div>
  `
})
export class ResultComponent  {
  venues: any = [];

  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.venueService.getVenues('london')
      .then(items => {
        for (let item of items)
          this.venues.push(item.venue);
      });
  }
}
