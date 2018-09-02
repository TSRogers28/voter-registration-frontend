import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home";
import {ElectionInformationPage} from "../pages/election-information/election-information";
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBLB1oRzLu-ydQdroSKI91dmTve1zmNprg',
  authDomain: 'voterregistration.firebaseapp.com',
  databaseURL: 'https://voterregistration.firebaseio.com/',
  projectId: 'voterregistration',
  storageBucket: 'voterregistration.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
  goHome(){
    this.nav.push(HomePage);
  }
  goToElectionInformation(){
    this.nav.push(ElectionInformationPage);
  }




}
