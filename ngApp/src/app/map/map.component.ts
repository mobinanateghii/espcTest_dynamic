import {Component, OnInit} from '@angular/core';
import {MapServiceService} from '../_services/map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapServiceService) {
  }

  location = {lat: '', lng: ''};

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.mapService.getLocationService().then(res => {
      this.location.lat = res.lat;
      this.location.lng = res.lng;
    });
  }

}
