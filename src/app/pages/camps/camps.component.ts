import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss']
})
export class CampsComponent implements OnInit {
  camps: any;
  constructor(public http: HttpService) { }

  ngOnInit(): void {
    this.http.getCamps('').subscribe((res: any) => {
      console.log(res);
      this.camps = res.items;
    });
  }

}
