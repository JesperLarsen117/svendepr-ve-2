import { element } from 'protractor';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  wednesday: any;
  thursday: any;
  friday: any;
  Saturday: any;
  day: any;
  time: any;
  constructor(public http: HttpService) { }

  ngOnInit(): void {
    const wed = [];
    const thu = [];
    const fri = [];
    const sat = [];

    this.http.getEvents('').subscribe((res: any) => {
      console.log(res.items);
      res.items.forEach(element => {
        const day = new Date(element.local_time).getDay();
        switch (day) {
          // onsdag
          case 3:
            wed.push(element);
            break;
          // torsdag
          case 4:
            thu.push(element);
            break;
          case 5:
            fri.push(element);
            break;
          case 6:
            sat.push(element);
            break;
          default:
            break;
        }
        this.day = wed;
        this.wednesday = wed;
        this.thursday = thu;
        this.friday = fri;
        this.Saturday = sat;

      });
    });
  }
  dayFilter(day, self) {
    const btns = document.getElementsByClassName('filter-buttons');
    Array.prototype.forEach.call(btns, (el: HTMLElement) => {
      el.style.backgroundColor = '#292929';
    });
    self.style.backgroundColor = '#395f98';
    switch (day) {
      case 'wed':
        this.day = this.wednesday;
        break;
      case 'thu':
        this.day = this.thursday;
        break;
      case 'fri':
        this.day = this.friday;
        break;
      case 'sat':
        this.day = this.Saturday;
        break;
      default:
        break;
    }
  }

  timeConverter(datetime: number) {
    const d = new Date(datetime);
    return `${d.getHours()}:${(d.getMinutes() === 0) ? '00' : '00'}`;
  }
}

