import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'result',
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.css']
})
export class ResultComponent {
  @Input() venue: any;
}
