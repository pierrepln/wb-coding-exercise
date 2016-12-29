import { Component, OnInit } from '@angular/core';
import { VenueService } from './venue.service';

@Component({
  selector: 'search',
  template: `
    <div>
      <input #term
        (keyup.enter)="search(term.value)"
        (blur)="search(term.value)"
        value="london" />
      <button (click)="search(term.value)"><img src='' /><span>Search</span></button>
    </div>
    <div *ngIf="venues.length > 0">
      <result *ngFor="let venue of venues" [venue]="venue"></result>
    </div>
  `
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

