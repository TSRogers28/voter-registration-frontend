import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PollingPlacesPage} from "../polling-places/polling-places";

/**
 * Generated class for the ElectionInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-election-information',
  templateUrl: 'election-information.html',
})
export class ElectionInformationPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectionInformationPage');
  }

  goToPollingPlaces(){
    this.navCtrl.push(PollingPlacesPage);

  }



}
