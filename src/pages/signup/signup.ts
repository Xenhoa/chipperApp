import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData : any;
  userData = {"username":"", "password":"", "email":"", "name":""};
  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  signup(){
    //API connections
    //this.navCtrl.push(TabsPage);
    this.authServiceProvider.postData(this.userData, "signup").then((result) =>{
        this.responseData = result;
        localStorage.setItem('userData', JSON.stringify(this.responseData))
        this.navCtrl.push(TabsPage);
    }, (err) => {
        //Connection Failed Message
    });
  }

}
