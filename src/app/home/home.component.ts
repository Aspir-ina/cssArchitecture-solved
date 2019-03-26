import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  time: number;
  constructor() { }

  ngOnInit() {
    this.time = Date.now();
  }

}
