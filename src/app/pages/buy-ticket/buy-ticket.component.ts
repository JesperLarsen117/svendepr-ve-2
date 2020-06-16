import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss']
})
export class BuyTicketComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  ticketInfo: any;
  price: any;
  constructor(public http: HttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getTickets(this.id).subscribe((res: any) => {
      console.log(res.item);
      this.ticketInfo = res.item;
      this.price = res.item.price;
    });

  }
  ticketAmountChange(amount) {
    // tslint:disable-next-line: no-unused-expression
    (amount <= 0) ? amount = 0 : amount;
    const htmlPrice = document.getElementById('price');
    this.price = parseInt(htmlPrice.textContent.replace('DKK ', ''), 10) * amount;
    console.log(this.price);

  }

}
