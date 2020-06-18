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
  data: any;
  constructor(public http: HttpService) {


  }

  ngOnInit() {
    this.http.getNews().subscribe((res: any) => {
      this.news = res.items;
    });
  }
}
