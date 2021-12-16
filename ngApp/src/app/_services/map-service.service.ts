import { Injectable } from '@angular/core';
import {promise} from 'protractor';
import {rejects} from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor() { }

  getLocationService(): Promise<any>{
    return new Promise( (resolve , reject) => {
        navigator.geolocation.getCurrentPosition(res => {
          resolve({lat: res.coords.latitude , lng: res.coords.longitude} );
        });
      }

    );
  }
}
