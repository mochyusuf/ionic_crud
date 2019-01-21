import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  user_id : number;
  username : string = "";
  phone_number : string = "";
  gender : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private post :PostProvider) {
  }

  ionViewDidLoad() {
    let user = this.navParams.get('user');
    this.user_id = user.user_id;
    this.username = user.username;
    this.phone_number = user.phone_number;
    this.gender = user.gender;
  }

  Update(){
    let body = {
      user_id : this.user_id,
      username : this.username,
      phone_number : this.phone_number,
      gender : this.gender,
      act : 'update'
    }

    this.post.postData(body,'api.php');
  }
}
