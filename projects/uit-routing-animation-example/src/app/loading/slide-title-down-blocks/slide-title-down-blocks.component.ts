import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocksAnimation} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-slide-title-down-blocks',
  templateUrl: './slide-title-down-blocks.component.html',
  styleUrls: ['./slide-title-down-blocks.component.css'],
  animations: [slideTitleDownBlocksAnimation()]
})
export class SlideTitleDownBlocksComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
