import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  news;
  constructor(public http: HttpService) {


  }

  ngOnInit(): void {
    this.http.data().subscribe((res: any) => {
      console.log(res.items);
      this.news = res.items;
    });
  }

}
