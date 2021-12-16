import {Component, OnInit} from '@angular/core';
import {MapServiceService} from '../_services/map-service.service';
import * as mapboxgl from 'mapbox-gl';
import {Constants} from '../_Authentication/Constants';
import {GeoJSONSource} from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  location = {lat: 35.72288 , lng: 51.4245497};

  constructor(private mapService: MapServiceService) {
  }


  ngOnInit(): void {
    this.getLocation();
    this.getMapBoxLocation();
  }

  getLocation() {
    this.mapService.getLocationService().then(res => {
      this.location.lat = res.lat;
      this.location.lng = res.lng;
    });
  }

  getMapBoxLocation(){
    // @ts-ignore
    mapboxgl.accessToken = Constants.MAP_BOX_TOKEN;
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true // Lazy load the plugin
    );
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.location.lng, this.location.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('click' , (event) => {
      const coordinates = [event.lngLat.lng , event.lngLat.lat];
      const newMarker = new GeoJSONSource(coordinates);
    });
  }

}
