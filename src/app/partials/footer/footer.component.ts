import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newsLetter = new FormGroup({
    email: new FormControl(''),

  });
  constructor() { }

  ngOnInit(): void {
  }

}
