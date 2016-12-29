import { Component, OnInit } from '@angular/core';
import { VenueService } from './venue.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit  {
  venues: any;

  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.venues = [];
    this.venueService.getVenues('london')
      .then(items => {
        for (let item of items)
          this.venues.push(item.venue);
      });
  }

  search(term: string): void {
    this.venues = [];
    if (term.length > 2) {
      this.venueService.getVenues(term)
        .then(items => {
          for (let item of items)
            this.venues.push(item.venue);
        });
    }
  }
}

