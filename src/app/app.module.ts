import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';

import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';

const firebaseConfig = { // setting up firebase credentials so my app can connect to firebase when authenticating Aleksi Ukkonen 1601558
  apiKey: "AIzaSyDGeiR2aqBIsqeOH325-P82Ri9GRD2vPVw",
  authDomain: "module-11.firebaseapp.com",
  databaseURL: "https://module-11.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "424488859710"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
