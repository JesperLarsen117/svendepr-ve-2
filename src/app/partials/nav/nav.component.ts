import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  checkLogin: boolean;
  constructor(public CheckLogin: CheckLoginService) { }

  ngOnInit(): void {
    this.CheckLogin.toggle$.subscribe(toggle => {
      this.checkLoggedIn(toggle);
    });
    if (this.CheckLogin.getCookie('user_id') != null) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  }
  checkLoggedIn(check) {
    if (check) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  }
  logout() {
    this.CheckLogin.setCookie('token', '', -7);
    this.CheckLogin.setCookie('user_id', '', -7);
    this.checkLogin = false;
  }
}
