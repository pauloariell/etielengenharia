import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    'assets/img/capa-01.png',
    'assets/img/capa-02.png',
    'assets/img/capa-03.png',
    'assets/img/capa-04.png',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
