import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Route} from "@angular/router";
import {BloglistService} from "./bloglist.service";
import { BloglistComponent } from './bloglist/bloglist.component';
import { AddblogComponent } from './addblog/addblog.component';
import { LoginComponent } from './bloglist/login/login.component';
import { BlogsComponent } from './bloglist/blogs/blogs.component';

const approutes = [
  {path: "", redirectTo: '/home',pathMatch: 'full'},
  {path: "home", component: BloglistComponent},
  {path: "add", component: AddblogComponent},
  {path: "**", redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BloglistComponent,
    AddblogComponent,
    LoginComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [BloglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
