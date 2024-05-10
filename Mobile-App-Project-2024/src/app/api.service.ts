import { Injectable } from '@angular/core';
//these two imports are what is needed to use an API
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
//uses HTTP client
  constructor(private hc: HttpClient) { }
//this delivers the data from the API asynchrononously
//uses observable
  MovieList():Observable<any> {
    return this.hc.get('http://www.omdbapi.com/?apikey=b0102157&s=%27war%27');
  }
}
