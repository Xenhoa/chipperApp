import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

let apiUrl = "http://localhost/PHP-Slim-Restful/api/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  
  postData(credentials, type){
  
    return new Promise((resolve, reject) =>{
     let headers = new Headers();
     this.http.post(apiUrl+type, JSON.stringify(credentials)).subscribe(res =>{
       resolve(res.json());
     }, 
     (err) => {
      reject(err);
     });
     
    })
  
  }

}
