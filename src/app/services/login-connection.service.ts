import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginConnectionService {
  loginFlag = false;
  loginFlagChild = false;
  constructor(public http:HttpClient) { }

  getRequest(){
    return this.http.get("https://jsonplaceholder.org/posts")
  }
}
