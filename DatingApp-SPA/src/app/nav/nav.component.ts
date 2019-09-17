import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Loging sucessfully');
    }, error => console.log(error));
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // tslint:disable-next-line: comment-format
    return !!token; //return true or false
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout');
  }

}
