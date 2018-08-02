import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-polling-places',
  templateUrl: 'polling-places.html',
})
export class PollingPlacesPage {

  constructor(public navCtrl: NavController) {

  }

  goBack(){
    this.navCtrl.pop();
  }


}
