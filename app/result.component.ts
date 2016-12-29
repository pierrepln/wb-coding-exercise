import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  template: `
    <div *ngIf="venue">
      <h2>{{venue.name}}</h2>
      <p>{{venue.categories[0].name}}</p>
      <p>{{venue.location.address}}, {{venue.location.city}}</p>
      <p>{{venue.rating}}</p>
      <hr/>
    </div>
  `
})
export class ResultComponent {
  @Input() venue: any;
}
