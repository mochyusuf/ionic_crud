import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the DashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html',
})
export class DashPage {

  users : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private post : PostProvider) {
    // this.users = [];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashPage');
    this.loadUser();
  }

  loadUser(){
    let body = {
      act: 'get',
    }
    this.post.getData(body, 'api.php').subscribe(data => {
      // @ts-ignore
      for (let user of data) {
        this.users.push(user);
      }
    });
    ;
    // this.post.getData(body, 'api.php').then(
    //   data => {
    //     console.log(data);
    //   }
    // )
  }

  Add(){
    this.navCtrl.push(HomePage);
  }

  show_data(user){
    this.navCtrl.push('ShowPage',{
      'user' : user
    })
  }

  update_data(user){
    this.navCtrl.push('UpdatePage',{
      'user' : user
    })
  }

  delete_data(id){

    let body = {
      user_id : id,
      act : 'delete'
    }

    this.post.postData(body,'api.php');
  }
}
