import { Component, OnInit } from '@angular/core';

import { VenueService } from './venue.service';

@Component({
  selector: 'result',
  template: `
    <div *ngFor="let venue of venues" >
      <p>{{venue}}</p>
      <p>{{venue.name}}</p>
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
          console.log(item);
          this.venues.push(item.venue);
      });
  }
}
