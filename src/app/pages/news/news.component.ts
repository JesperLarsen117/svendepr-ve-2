import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news;
  constructor(public http: HttpService) { }

  async ngOnInit() {
    this.http.getNews('').subscribe((res: any) => {
      this.news = res.items;
    });

    this.waitForElementToDisplay('.news', 200);

  }

  waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
      const newsArticles = document.querySelectorAll('.news');
      console.log(newsArticles);
      Array.prototype.forEach.call(newsArticles, (el: HTMLElement, index) => {
        console.dir('news-cards-animation');
        el.style.animationName = 'news-cards-animation';
        el.style.animationDuration = 400 * index + 'ms';
        el.style.animationDelay = 200 * index + 'ms';
        el.style.animationFillMode = 'forwards';
      });
      return;
    } else {
      setTimeout(() => {
        this.waitForElementToDisplay(selector, time);
      }, time);
    }
  }
}