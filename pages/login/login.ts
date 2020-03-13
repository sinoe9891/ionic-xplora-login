import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['../../app/app.scss', 'login.scss'],
})
export class LoginPage {


  // @ViewChild('myButton') mybutton: ElementRef;
  // @ViewChild('myButton', {read: ElementRef}) myButton;
  
  tab1Root = LoginPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  
  variableBooleana:boolean = true;

  constructor(public navCtrl: NavController, public renderer: Renderer ) {
 
  }

  cambiarClase(){
    this.variableBooleana = !this.variableBooleana
    // this.renderer.setElementStyle(this.myButton.nativeElement, 'padding', '0');
    console.log(this.variableBooleana)
    // console.log(this.myButton);
  }

  // changeStyle(){
  //   console.log(this.myButton);
  //   // this.renderer.setElementClass(this.myButton.nativeElement, 'button', true);
  //   // this.renderer.setElementClass(this.myButton.nativeElement, 'button2', false);
  //   this.renderer.setElementStyle(this.myButton.nativeElement, 'padding', '0');
  // }

}
