import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  camp;
  constructor(public http: HttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getCamps(this.id).subscribe(res => {
      console.log(res);
      this.camp = res;
      this.camp = this.camp.item;
    });
  }

}






