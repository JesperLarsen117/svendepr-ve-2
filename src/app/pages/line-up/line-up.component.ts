import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {
  lineUp: any;
  time: any;
  scene: any;
  constructor(public http: HttpService) { }

  ngOnInit(): void {
    const dayArr = [
      'Søndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lørdag',
    ];
    this.http.getEvents('').subscribe((res: any) => {
      const timeArr = [];
      const lineUpArr = [];
      const sceneArr = [];
      // this.lineUp = res.items;
      console.log(res.items);

      res.items.forEach(element => {
        if (element.type_id === '1' || element.type_id === '2' || element.type_id === '3') {
          const d = new Date(element.local_time);
          timeArr.push(`${dayArr[d.getDay()]} kl. ${d.getHours()}:${(d.getMinutes() === 0) ? '00' : '00'}`);
          lineUpArr.push(this.lineUp = element);
          switch (element.stage_id) {
            case '1':
              sceneArr.push('red');
              break;
            case '2':
              sceneArr.push('blue');

              break;
            case '3':
              sceneArr.push('green');

              break;
            case '4':
              sceneArr.push('purple');
              break;
            default:
              break;
          }
        }
      });
      this.time = timeArr;
      this.lineUp = lineUpArr;
      this.scene = sceneArr;

    });
    this.waitForElementToDisplay('.lineUpCard', 200);
  }
  onClickFilter(className, e) {
    const allElm = document.getElementsByClassName('filter');
    const buttonHtml = e.target as HTMLElement;
    Array.prototype.forEach.call(allElm, (el: HTMLElement) => {
      const parrent = el.parentNode as HTMLElement;
      (className !== 'all')
        ? (el.classList[1] === className)
          ? parrent.style.display = 'block'
          : parrent.style.display = 'none'
        : parrent.style.display = 'block';

      switch (className) {
        case 'filter-red':
          this.switchBtnBackground(buttonHtml, '#ac324c');
          break;
        case 'filter-blue':
          this.switchBtnBackground(buttonHtml, '#336699');
          break;
        case 'filter-green':
          this.switchBtnBackground(buttonHtml, '#638b3f');
          break;
        case 'filter-purple':
          this.switchBtnBackground(buttonHtml, '#88267f');
          break;
        default:
          this.switchBtnBackground(buttonHtml, '#9c930e');
          break;
      }
    });
  }

  switchBtnBackground(btn, color) {
    const allButtons = document.getElementsByClassName('filter-buttons') as unknown as NodeListOf<HTMLElement>;
    Array.prototype.forEach.call(allButtons, (el: HTMLElement) => {
      el.style.backgroundColor = '#292929';
    });
    btn.style.backgroundColor = color;
  }

  waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
      const newsArticles = document.querySelectorAll('.lineUpCard');
      console.log(newsArticles);
      Array.prototype.forEach.call(newsArticles, (el: HTMLElement, index) => {
        el.style.animationName = 'lineUp-cards-animation';
        el.style.animationDuration = 200 * index + 'ms';
        el.style.animationDelay = 0 * index + 'ms';
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
