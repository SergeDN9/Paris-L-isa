import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  tabGrad = [];
  tabUnit = [0, 10, 20, 30];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 31 ; i ++) {
      this.tabGrad.push('');
    }
  }

}
