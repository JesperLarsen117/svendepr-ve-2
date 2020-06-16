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
    this.http.getEvents().subscribe((res: any) => {
      const timeArr = [];
      const lineUpArr = [];
      const sceneArr = [];
      // this.lineUp = res.items;
      console.log(res.items);

      res.items.forEach(element => {
        if (element.type_id === '1' || element.type_id === '2' || element.type_id === '3') {
          let d = new Date(element.local_time);
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
  }
  onClickFilter(className, e) {
    const allButtons = document.getElementsByClassName('filter-buttons') as unknown as NodeListOf<HTMLElement>;
    const elem = document.getElementsByClassName(className);
    const allElm = document.getElementsByClassName('filter');
    const buttonHtml = e.target as HTMLElement;
    Array.prototype.forEach.call(allElm, (el: HTMLElement) => {
      const parrent = el.parentNode as HTMLElement;
      if (className !== 'all') {
        if (el.classList[1] === className) {
          parrent.style.display = 'block';
        } else {
          parrent.style.display = 'none';
        }
      } else {
        parrent.style.display = 'block';
      }

      switch (className) {
        case 'filter-red':
          Array.prototype.forEach.call(allButtons, (el: HTMLElement) => {
            el.style.backgroundColor = '#292929';
          });
          buttonHtml.style.backgroundColor = '#ac324c';
          break;
        case 'filter-blue':
          Array.prototype.forEach.call(allButtons, (el: HTMLElement) => {
            el.style.backgroundColor = '#292929';
          });
          buttonHtml.style.backgroundColor = '#336699';
          break;
        case 'filter-green':
          Array.prototype.forEach.call(allButtons, (el: HTMLElement) => {
            el.style.backgroundColor = '#292929';
          });
          buttonHtml.style.backgroundColor = '#638b3f';
          break;
        case 'filter-purple':
          Array.prototype.forEach.call(allButtons, (el: HTMLElement) => {
            el.style.backgroundColor = '#292929';
          });
          buttonHtml.style.backgroundColor = '#88267f';
          break;
        default:
          Array.prototype.forEach.call(allButtons, (el: HTMLElement) => {
            el.style.backgroundColor = '#292929';
          });
          buttonHtml.style.backgroundColor = '#9c930e';
          break;
      }
    });
  }
}
