import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from "../../providers/post-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController,public serviceClass : PostService) {

  }
  ionViewDidLoad(){
    console.log("data :: "+ this.serviceClass.getDataFromServer);
  }
  // ionViewDidLoad(){
  //   console.log("ionViewLoaded--");
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');

  //   let body = {
  //     message:"Sending post request"
  //   };

  //   this.http.post('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot',JSON.stringify(body),{headers:headers})
  //   .map(res=>res.json())
  //   .subscribe(data=>{
  //     console.log(" -- output :: "+data);
  //   });
  // }
}
