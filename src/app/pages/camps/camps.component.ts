import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss']
})
export class CampsComponent implements OnInit {
  camps: any;
  soldTickets;
  constructor(public http: HttpService, public CheckLogin: CheckLoginService) { }

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.CheckLogin.getCookie('token')}`);
    const soldTicketsArr = [];
    this.http.getCamps('').subscribe(async (res: any) => {
      this.camps = res.items;
      soldTicketsArr.push(await this.http.getSoldTickets('1', { headers }).toPromise());
      soldTicketsArr.push(await this.http.getSoldTickets('2', { headers }).toPromise());
      soldTicketsArr.push(await this.http.getSoldTickets('3', { headers }).toPromise());

    });
    this.soldTickets = soldTicketsArr;
    console.log(this.soldTickets);
  }

}
