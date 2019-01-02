import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name : string = "";
  phone_number : string = "";
  gender : string = "";

  constructor(private post: PostProvider, public navCtrl: NavController) {

  }

  Add(){
    let body = {
      username : this.name,
      phone_number : this.phone_number,
      gender : this.gender,
      act : 'add'
    }

    this.post.postData(body, 'api.php');
  }

}
