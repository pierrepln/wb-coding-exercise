import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

@Injectable()
export class VenueService {
  constructor(private http: Http) {}
}
