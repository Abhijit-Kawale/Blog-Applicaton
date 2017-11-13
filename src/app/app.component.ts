import {Component, OnInit} from '@angular/core';
import {BloglistService} from "./bloglist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  blogs: Object [];
  link = {
    home: ["/home"],
    add: ["/add"]

  }

  constructor(private request: BloglistService){}

  ngOnInit(){
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
      })
  }

  refreshData(){
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
      })
  }

}
