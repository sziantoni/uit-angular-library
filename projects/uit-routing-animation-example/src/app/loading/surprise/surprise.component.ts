import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {surprise} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css'],
  animations: [surprise]
})
export class SurpriseComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit(): void {
  }

}
