import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PollingPlacesPage} from "../polling-places/polling-places";

@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectionInformationPage');
  }

  doLogin() {
    this.navCtrl.setRoot('TabsPage');
  }


  }
