import {NavController, ModalController, Platform} from 'ionic-angular';
import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng} from "@ionic-native/google-maps";

declare var google: any;

@Component({
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;


  address;
  autocompleteItems;
  autocomplete;
  latitude: number = 0;
  longitude: number = 0;
  geo: any

  service = new google.maps.places.AutocompleteService();

  constructor(private platform:Platform,
              private googleMaps:GoogleMaps,
              private navCtrl: NavController,
              public geolocation: Geolocation,
              private modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private zone: NgZone) {
    this.address = {
      place: ''
    };
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''};
  }

  ionViewDidLoad(){
    this.geolocation.getCurrentPosition(function(position){
      var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
      };

    }).then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

    this.platform.ready().then(()=> {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create(element);

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 9
        };

        //this.map.addEventListener()

        this.map.moveCamera(options)
      });
    });


  }

  // showAddressModal () {
  //   let modal = this.modalCtrl.create(AutocompletePage);
  //   let me = this;
  //   modal.onDidDismiss(data => {
  //     this.address.place = data;
  //   });
  //   modal.present();
  // }

  dismiss() {

    this.autocompleteItems.pop();
  }



  chooseItem(item: any) {
    this.geoCode(item); //convert Address to lat and long
    this.dismiss();
    console.log(this.latitude, this.longitude);
  }

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
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
    });
  }
}
