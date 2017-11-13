import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BloglistService} from "../bloglist.service";

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  @Output () getuser : EventEmitter<String> = new EventEmitter<String>();
  bloglist: Object[];
  cuser: Object = {};
  categorylist: String [];

  constructor(private request: BloglistService) { }

  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
        this.bloglist = data;
        this.updatecategorylist();
      })
    this.cuser =this.request.getUser();


  }

  refreshData(){
    this.request.loadData()
      .subscribe((data) => {
        this.bloglist = data;
        this.updatecategorylist();
      })
    this.cuser =this.request.getUser();

  }

  getcuser(user_details){
    this.cuser =this.request.getUser();
  }

  setcuser(user_details){
    this.request.setUser(user_details);
    this.getcuser(user_details);
    this.updatecategorylist();
  }

  UpdateUser(event){
    this.request.updateUserData(event).subscribe((data) =>{

    });
  }

  logoutuser(event){
    this.request.logout(event);
    this.refreshData();
  }

  updatecategorylist(){
    this.categorylist = [];
    this.categorylist.push('Show all categories');
    for(var x in this.bloglist){
      if(!this.categorylist.includes(this.bloglist[x]['catagory'])){
        this.categorylist.push(this.bloglist[x]['catagory']);
      }
    }
  }

  deleteblog(event){
    this.request.deleteData(event).subscribe(
      data => {
        this.refreshData();
      }
    )
  }

  editblog(event){
    this.request.seteditid(event);
  }





}
