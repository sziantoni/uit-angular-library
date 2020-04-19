import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-slide-title-down-blocks',
  templateUrl: './slide-title-down-blocks.component.html',
  styleUrls: ['./slide-title-down-blocks.component.css'],
  animations: [slideTitleDownBlocks]
})
export class SlideTitleDownBlocksComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit(): void {
  }

}
