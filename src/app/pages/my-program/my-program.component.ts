import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-program',
  templateUrl: './my-program.component.html',
  styleUrls: ['./my-program.component.scss']
})
export class MyProgramComponent implements OnInit {

  constructor(public http: HttpService, public CheckLogin: CheckLoginService) { }

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.CheckLogin.getCookie('access_token')}`);
    headers.append('Access-Control-Allow-Origin', '*');
    console.log(headers);


  }

}
