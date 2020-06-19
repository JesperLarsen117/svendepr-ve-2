import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  article;
  constructor(public http: HttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getNews(this.id).subscribe((res: any) => {
      this.article = res.item;
      console.log(res);

    });
  }
  timeConverter(datetime: number) {
    const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];
    const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];

    const d = new Date(datetime);
    const h = (d.getHours() <= 9) ? `0${d.getHours()}` : d.getHours();
    const m = (d.getMinutes() === 0) ? '00' : d.getMinutes();
    return `${days[d.getDay()]} d. ${d.getDate()}. ${months[d.getMonth()]} - kl. ${h}:${m}`;
  }
}
