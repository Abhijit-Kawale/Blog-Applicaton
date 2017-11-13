import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";

const BASE_URL = 'http://localhost:3000/blogs/';
const BASE_URL_USERS = 'http://localhost:3000/users/';
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class BloglistService {

  currentuser: Object = {id:-1};
  toedit: Number = -1;
  constructor(private http: Http,private router: Router) { }

  getUser(){
    return this.currentuser;
  }

  setUser(user){
    this.currentuser = user;
  }

  geteditid(){
    return this.toedit;
  }

  seteditid(blogid){
    this.toedit = blogid;
    this.router.navigate(['/add']);
  }

  loadUsers(){
    return this.http.get(BASE_URL_USERS)
      .map(res => res.json())
  }

  loadData() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
  }

  loadBlog(blogid) {
    return this.http.get(BASE_URL+blogid)
      .map(res => res.json())
  }

  postData(data) {
    return this.http.post(BASE_URL,data, header)
      .map(res => res.json())

  }

  updateData(data) {

    return this.http.patch(BASE_URL+data.id,data, header)
      .map(res => res.json())
  }

  updateUserData(data) {
    return this.http.patch(BASE_URL_USERS+data.id,data, header)
      .map(res => res.json())
  }

  checkData(data) {
    return data.id>=0?this.updateData(data): this.postData(data);
  }

  deleteData(data) {
    console.log(data);
    return this.http.delete(BASE_URL+data)
      .map(res => res.json())
  }

  logout(data){
    this.currentuser = {id:-1};
  }

}
