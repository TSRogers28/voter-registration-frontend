import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import {ElectionInformationPage} from "../pages/election-information/election-information";
import {PollingPlacesPage} from "../pages/polling-places/polling-places";
import {MapPageModule} from "../pages/map/map.module";
import {GoogleMaps} from "@ionic-native/google-maps";
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';
import {AutocompletePage} from "../pages/AutoCompletePage/auto-complete-page";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    RegisterPage,
    AutocompletePage,
    HomePage,

    PollingPlacesPage,
    ElectionInformationPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    MapPageModule,
    GooglePlacesAutocompleteComponentModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    RegisterPage,
    AutocompletePage,
    HomePage,
    PollingPlacesPage,
    ElectionInformationPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
