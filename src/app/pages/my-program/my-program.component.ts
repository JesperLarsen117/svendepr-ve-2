import { element } from 'protractor';
import { CheckLoginService } from './../../services/check-login.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-program',
  templateUrl: './my-program.component.html',
  styleUrls: ['./my-program.component.scss']
})
export class MyProgramComponent implements OnInit {
  myProgram;
  constructor(public http: HttpService, public CheckLogin: CheckLoginService) { }

  ngOnInit(): void {
    const programArr = [];

    const wed = [];
    const thu = [];
    const fri = [];
    const sat = [];
    const colorWed = [];
    const colorThu = [];
    const colorFri = [];
    const colorSat = [];
    const useriId = this.CheckLogin.getCookie('user_id');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.CheckLogin.getCookie('token')}`);
    this.http.getMyProgram(useriId, { headers }).subscribe((res: any) => {
      res.items.forEach(elm => {
        const d = new Date(elm.datetime).getDay();
        // if (d === 3) { wed.push(elm); colorWed.push(this.chooseColor(elm.stage_name)); }
        // if (d === 4) { thu.push(elm); colorThu.push(this.chooseColor(elm.stage_name)); }
        // if (d === 5) { fri.push(elm); colorFri.push(this.chooseColor(elm.stage_name)); }
        // if (d === 6) { sat.push(elm); colorSat.push(this.chooseColor(elm.stage_name)); }
        switch (d) {
          case 3:
            wed.push(elm); colorWed.push(this.chooseColor(elm.stage_name));
            break;
          case 4:
            thu.push(elm); colorThu.push(this.chooseColor(elm.stage_name));
            break;
          case 5:
            fri.push(elm); colorFri.push(this.chooseColor(elm.stage_name));
            break;
          case 6:
            sat.push(elm); colorSat.push(this.chooseColor(elm.stage_name));
            break;
          default:
            break;
        }
      });
    });
    this.myProgram = [
      { day: 'Onsdag', color: colorWed, items: wed },
      { day: 'Torsdag', color: colorThu, items: thu },
      { day: 'Fredag', color: colorFri, items: fri },
      { day: 'Lørdag', color: colorSat, items: sat },
    ];
    console.log(this.myProgram);

  }
  timeConverter(datetime: number) {
    const d = new Date(datetime);
    return `${d.getHours()}:${(d.getMinutes() === 0) ? '00' : '00'}`;
  }
  chooseColor(color) {
    switch (color) {
      case 'Rød scene':
        return 'red';
      case 'Blå scene':
        return 'blue';
      case 'Grøn scene':
        return 'green';
      case 'Lilla scene':
        return 'purple';
      default:
        break;
    }
  }
  deleteProgram(eventId, self) {
    console.log(eventId);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.CheckLogin.getCookie('token')}`);
    self.target.parentNode.remove();
    this.http.deleteProgram(eventId, { headers }).subscribe((res: any) => {
    });

  }
}
