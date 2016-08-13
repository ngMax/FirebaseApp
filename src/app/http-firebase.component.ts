import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DataService } from './data.service';
@Component({
  moduleId: module.id,
  selector: 'http-firebase-app',
  templateUrl: 'http-firebase.component.html',
  styleUrls: ['http-firebase.component.css'],
  providers:[DataService]
})
export class HttpFirebaseAppComponent {
  response:string;
  title = 'http-firebase works!';
  constructor(private _dataservice: DataService ){}
  onPostData(title:string, body:string, userId:string){
      const data={
        title: title,
        body: body,
        userId: userId
      }
      this._dataservice.postData(data)
            .subscribe(
              data  => this.response=JSON.stringify(data),
              error => console.log(error)
            );
  }

  onGetPosts(){ 
    this._dataservice.getData()
        .subscribe(
          data => {
            console.log(data);
            this.response=JSON.stringify(data);
          },
          error => console.log(error)
        );
  }
}
