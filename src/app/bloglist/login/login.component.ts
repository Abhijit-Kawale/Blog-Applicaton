import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BloglistService} from "../../bloglist.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users : Object [];
  @Output () sendusername : EventEmitter<Object> = new EventEmitter<Object>();

  constructor( private request: BloglistService) {}

  ngOnInit() {
  }

  login(username,password){
    this.request.loadUsers()
      .subscribe((data)=>{
        this.users = data;
        for(var x in this.users){
          if(this.users[x]['username'] == username && this.users[x]['password'] == password ){
            this.sendusername.emit(this.users[x]);
          }
        }
      })


  }

}
