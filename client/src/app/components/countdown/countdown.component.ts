import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
