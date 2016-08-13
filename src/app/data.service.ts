import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService{
constructor(private _http:Http){}
postData(data:any):Observable<any> {
    const body=JSON.stringify(data);
    const headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post("https://angular2-91eac.firebaseio.com/data.json", body, {headers: headers})
                .map(response => response.json());
  }
getData():Observable<any>{
    return this._http.get("https://angular2-91eac.firebaseio.com/data.json")
                .map(response => response.json());
}
}