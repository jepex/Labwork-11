import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { Tab3Page } from './../tab3/tab3';
import { Tab4Page } from './../tab4/tab4';
import { SpecialPage } from './../special/special';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
// Setting up types of things i needed with menu bar Aleksi Ukkonen 1601558
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';
 
  @ViewChild(Nav) nav: Nav;
 
  // Creating a menu bar with a 5 pages Aleksi Ukkonen 1601558
  pages: PageInterface[] = [
    { title: 'About', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'My App', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },

  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
   // page index tells app what tab is what Aleksi Ukkonen 1601558
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // Making menu bar able to select item Aleksi Ukkonen 1601558
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
    
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Telling app what to do if no active tabs Aleksi Ukkonen 1601558
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}
