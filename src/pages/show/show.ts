import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  user_id : number;
  username : string = "";
  phone_number : string = "";
  gender : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    let user = this.navParams.get('user');
    this.user_id = user.user_id;
    this.username = user.username;
    this.phone_number = user.phone_number;
    this.gender = user.gender;
    console.log(user);
  }

}
