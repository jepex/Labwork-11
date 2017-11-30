import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';




  constructor(public navCtrl: NavController,public firebaseProvider: FirebaseProvider, public navParams: NavParams) {
  this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
