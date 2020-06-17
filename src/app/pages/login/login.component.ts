import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public http: HttpService, public checkLogin: CheckLoginService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const formData: any = new FormData();
    formData.append('username', this.loginForm.get('username').value);
    formData.append('password', this.loginForm.get('password').value);
    this.http.getLogin(formData).subscribe((res: any) => {
      if (res.access_token) {
        this.setCookie('token', res.access_token, 7);
        this.setCookie('user_id', res.user_id, 7);
        this.login = true;
        this.checkLogin.toggle.next(this.login);

      }
    });
  }
  setCookie(cnamne, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString;
    document.cookie = `${cnamne} = ${cvalue}; ${expires};path=/`;
  }
}
