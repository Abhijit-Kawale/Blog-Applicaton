import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  sortfav: boolean = false;
  category: String = "Show all categories";
  @Input () blogs;
  @Input () currentuser;
  @Input () catlist;
  @Output () updateuser : EventEmitter<Object> = new EventEmitter<Object>();
  @Output () logoutuser : EventEmitter<Number> = new EventEmitter<Number>();
  @Output () delblog : EventEmitter<Number> = new EventEmitter<Number>();
  @Output () edblog : EventEmitter<Number> = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {

  }

  showAll(){
    this.sortfav = false;
  }

  showFav(){
    this.sortfav = true;
  }

  toggleFav(blogid){
    if(this.currentuser.favorite.includes(blogid)){
      const index = this.currentuser.favorite.indexOf(blogid);
      this.currentuser.favorite.splice(index,1);
      this.updateuser.emit(this.currentuser);
    }
    else{
      this.currentuser.favorite.push(blogid);
      this.updateuser.emit(this.currentuser);
    }
  }

  logout(){
    this.logoutuser.emit(-1);
  }

  edit(blogid){
    this.edblog.emit(blogid) ;
  }

  deleteblog(blogid){
    this.delblog.emit(blogid);
  }

  getmydate(milis){
    var x = new Date(milis);
    return x.toLocaleString();
  }



}
