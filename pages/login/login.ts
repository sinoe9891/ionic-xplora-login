import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['../../app/app.scss']
})
export class LoginPage {

  tab1Root = LoginPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
