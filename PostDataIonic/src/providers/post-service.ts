import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(public http: Http) {
    console.log('Hello PostService Provider');
  }
getDataFromServer(){
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot').subscribe(data =>{
      console.log(data);
  });
  }
}
