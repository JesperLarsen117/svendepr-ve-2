import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toogle(e) {
    console.dir(e.target.parentNode.nextSibling.classList);
    e.target.parentNode.nextSibling.classList.toggle('visible');
  }

  scrollToElement($element): void {
    console.log($element);
    $element.target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
