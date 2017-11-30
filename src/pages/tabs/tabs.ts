import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  // Telling app what are these tabXRoot pages Aleksi Ukkonen 1601558
  tab1Root: any = 'Tab1Page';
  tab2Root: any = 'Tab2Page';

  myIndex: number;
 
  constructor(navParams: NavParams) {
  
    this.myIndex = navParams.data.tabIndex || 0;
  }
}