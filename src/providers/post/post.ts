import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Request, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  server : string ="http://localhost/dummy_ionic/";

  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  postData(body, file){
      let type = "application/json; charset-UTF-8";
      let header = new Headers({'Contect-Type': type});
      let options = new RequestOptions({headers : header});

      // return this.http.post(this.server + file, JSON.stringify(body)).map(
      //   res => res.json();
      // );

      return new Promise((resolve, reject) => {
          this.http.post(this.server+file, JSON.stringify(body)).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }

}
