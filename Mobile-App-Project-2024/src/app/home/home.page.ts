import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage-angular';
//storage and apiservice imports 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies:any[]=[];
  //using API
  constructor(private ms: ApiService, private storage: Storage) {}

  ngOnInit(): void {
    this.ms.MovieList().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }
  myStatus: string | undefined;
//storage on this page
async ionViewWillEnter() {
await this.storage.create();
this.myStatus = await this.storage.get('status');
}
  
}
