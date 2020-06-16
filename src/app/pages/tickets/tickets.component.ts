import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  ticketsBundle: any;
  ticketDay: any;
  constructor(public http: HttpService) { }

  ngOnInit(): void {
    const bundle = [];
    const day = [];
    this.http.getTickets().subscribe((res: any) => {
      console.log(res.items);
      Array.prototype.forEach.call(res.items, (el) => {
        if (el.id === '1' || el.id === '2') {
          bundle.push(el);
        } else {
          day.push(el);
        }
      });
      this.ticketsBundle = bundle;
      this.ticketDay = day;
    });
  }
}
