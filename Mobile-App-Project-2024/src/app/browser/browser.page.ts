import { Component, OnInit } from '@angular/core';
//implementing browser
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {

  ngOnInit() {
  }
  //empty constructor as there is no need for anything in it
  constructor() { }
  //asynchronously pulling up browser
async openBrowser() {
await Browser.open({ url: 'https://www.palas.ie/' });
};


}
