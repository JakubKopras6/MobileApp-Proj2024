import { Component, OnInit } from '@angular/core';
//imports needed for storage
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
//my code wouldn't run unless I made the string undefined
  myStatus: string | undefined;
  constructor(private storage: Storage, private navCtrl: NavController) { }
  ngOnInit() {
  }
  //asynchronously getting data
  async ionViewWillEnter() {
  await this.storage.create();
  this.myStatus = await this.storage.get('status');
  }
  //saving status with the storage import
  async saveStatus() {
  await this.storage.set('status', this.myStatus)
  .then(
  ()=>{
  this.navCtrl.navigateBack('/home')
  })
  .catch();
  }

}
