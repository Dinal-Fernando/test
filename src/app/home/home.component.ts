import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  countClick() {
    this.clickCounter += 1;
  }

}
