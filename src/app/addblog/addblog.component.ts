import { Component, OnInit } from '@angular/core';
import {BloglistService} from "../bloglist.service";
import {Router} from "@angular/router";

const BASE_URL = 'http://localhost:3000/blogs/';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})



export class AddblogComponent implements OnInit {
  cuser: Object = {};
  toeditid: Number = -1;
  oldtitle: String = "";
  oldcat : String = "";
  oldcontent : String = "";

  constructor(private request: BloglistService, private router: Router) { }

  ngOnInit() {
    this.getcuser();
    if(this.cuser['id']==-1){
      alert('Please Login');
      this.router.navigate(['/home'])
    }
    this.toeditid = this.request.geteditid();
    if(this.toeditid>=0){
      this.request.loadBlog(this.toeditid).subscribe(
        data => {
          this.oldtitle = data.title;
          this.oldcat = data.catagory;
          this.oldcontent = data.content;
        }
      )
    }
  }

  getcuser(){
    this.cuser =this.request.getUser();
  }

  publish(title,cat,content){

    let newblog = {
      title : title,
      author : this.cuser['username'],
      date : (new Date()).getTime(),
      catagory : cat,
      content : content
    }
    if(this.toeditid>=0){
      newblog['id'] = this.toeditid;
    }
    this.request.seteditid(-1);
    this.request.checkData(newblog).subscribe(
      data => {

        this.router.navigate(['/home']);

      }

    )

  }

  cancle(){
    this.request.seteditid(-1);
    this.router.navigate(['/home']);
  }

}
