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
  @ViewChild('myButton', {read: ElementRef}) myButton;
  
  tab1Root = LoginPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public renderer: Renderer ) {

// this.renderer.setElementClass(this.myButton.nativeElement, 'button', true);
  
  }
  changeStyle(){
    console.log(this.myButton);
    // this.renderer.setElementStyle(this.myButton.nativeElement, 'padding', '0'); 
    this.renderer.setElementClass(this.myButton.nativeElement, 'button', true);
    this.renderer.setElementClass(this.myButton.nativeElement, 'button2', false);
    // this.renderer.setElementClass(this.myButton, 'class1', false); // remove class1
    // this.renderer.setElementClass(this.myButton, 'button', false);
    // this.renderer.setElementClass(this.myButton.ElementRef , 'button2' + this.changeStyle , true);
    // this.renderer.setElementClass(this.myButton, 'button', false);
    // this.renderer.setElementClass(this.myButton, 'button2', true);
    // this.renderer.setElementStyle.addClass(this.myButton.nativeElement, 'button2');
    // this.renderer.setElementStyle(this.myButton.nativeElement, 'padding', '0');
  }

}
