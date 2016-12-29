import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class VenueService {
  // TODO: check for production readyness
  private CLIENT_ID = 'APNIFJ0HVYMOZI15II0VA131JMD4MYOECNUNQVZJQMBJFN1F';
  private CLIENT_SECRET = 'WYAWHMPEQE4WYO45M3ADSFC20SBS2FB1SDCHGGKDJSKLHOWP';
  private YYYYMMDD = '20161229'; // required for version
  private venueUrlPrefix = `https://api.foursquare.com/v2/venues/explore?near=`;
  private venueUrlSuffix = `&client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=${this.YYYYMMDD}`;

  constructor(private http: Http) {}

  getVenues(search: string): Promise<any> {
    const url = this.venueUrlPrefix + search + this.venueUrlSuffix;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().response.groups[0].items)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
