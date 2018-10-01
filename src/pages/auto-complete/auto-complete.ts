import { Component, NgZone } from '@angular/core';
import {  ViewController } from 'ionic-angular';
declare var google: any;


/**
 * Generated class for the AutoCompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auto-complete',
  templateUrl: 'auto-complete.html',
})
export class AutoCompletePage {

  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any

  service = new google.maps.places.AutocompleteService();

  constructor (public viewCtrl: ViewController, private zone: NgZone) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // chooseItem(item: any) {
  //   this.viewCtrl.dismiss(item);
  //   this.geo = item;
  //   this.geoCode(this.geo);//convert Address to lat and long
  // }

  updateSearch() {

    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }

    let me = this;
    this.service.getPlacePredictions({
      input: this.autocomplete.query,
      componentRestrictions: {
        country: 'us'
      }
    }, (predictions, status) => {
      me.autocompleteItems = [];

      me.zone.run(() => {
        if (predictions != null) {
          predictions.forEach((prediction) => {
            me.autocompleteItems.push(prediction.description);
          });
        }
      });
    });
  }

  //convert Address string to lat and long
  // geoCode(address:any) {
  //   let geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ 'address': address }, (results, status) => {
  //     this.latitude = results[0].geometry.location.lat();
  //     this.longitude = results[0].geometry.location.lng();
  //   });
  // }

}
