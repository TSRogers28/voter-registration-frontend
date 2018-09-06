import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController} from 'ionic-angular';
import {ElectionInformationPage} from "../election-information/election-information";
import {MapPage} from "../map/map";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };


  constructor(public navCtrl: NavController, private theInAppBrowser: InAppBrowser) {

  }

  goToElectionInformation(){
    this.navCtrl.push(ElectionInformationPage);
  }

  goToMapPage(){
    this.navCtrl.push(MapPage);
  }

  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }
}
