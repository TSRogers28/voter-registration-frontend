import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController} from 'ionic-angular';
import {ElectionInformationPage} from "../election-information/election-information";
import {MapPage} from "../map/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;


  constructor(public navCtrl: NavController) {

  }
  goToRegistration(){
    window.open('https://ivote.de.gov/voterregterms.aspx', '_self', 'location=yes')
  }

  goToElectionInformation(){
    this.navCtrl.push(ElectionInformationPage);
  }

  goToMapPage(){
    this.navCtrl.push(MapPage);
  }

  ionViewDidLoad() {
    console.log(this.mapRef);
  }





}
