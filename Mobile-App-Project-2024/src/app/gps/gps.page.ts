import { Component, OnInit } from '@angular/core';
//imports are used for browser and geolocation
import { Browser } from '@capacitor/browser';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GPSPage {
  coordinates: any = "";
  lat: string = "";
  long: String = "";
  constructor() { }
  //The getGPS() function  gets the current GPS of the device using the app
  async getGPS() {
    //gets current position
  this.coordinates = await Geolocation.getCurrentPosition();
  //gets coordinates
  this.lat = this.coordinates.coords.latitude;
  this.long = this.coordinates.coords.longitude;
  }
  
  }
  

  


