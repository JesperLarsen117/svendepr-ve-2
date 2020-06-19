import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newsLetter = new FormGroup({
    email: new FormControl(''),

  });
  constructor(public http: HttpService, public CheckLogin: CheckLoginService) { }

  ngOnInit(): void {


  }

  onSubmit() {
    const formData: any = new FormData();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.CheckLogin.getCookie('token')}`);
    formData.append('email', this.newsLetter.get('email').value);
    this.http.newsLetter(formData, { headers }).subscribe((res: any) => {
      console.log(res);
    });
  }

}
