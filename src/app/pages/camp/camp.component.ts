import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  camp;
  open;
  soldTickets;
  constructor(public http: HttpService, public route: ActivatedRoute, public CheckLogin: CheckLoginService) { }

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.CheckLogin.getCookie('token')}`);
    this.http.getCamps(this.id).subscribe(res => {
      this.camp = res;
      this.open = this.pullElement(this.camp.item.facilities, 8);
      this.removeElement(this.camp.item.facilities, 8);
      this.camp = this.camp.item;
    });
    this.http.getSoldTickets(this.id, { headers }).subscribe((res: any) => {
      this.soldTickets = +res.num_tickets_sold;
    });
  }
  removeElement(array, i) {
    (array.findIndex(obj => +obj.id === i) === 0) ? array.shift() : array.splice(array.findIndex(obj => +obj.id === i));
  }
  pullElement(array, i) {
    return array[array.findIndex(obj => +obj.id === i)];
  }
}






