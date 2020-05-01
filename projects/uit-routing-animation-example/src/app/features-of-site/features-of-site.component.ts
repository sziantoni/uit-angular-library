import { Component, OnInit } from '@angular/core';
import { ROUTING_ELEMENT} from 'uit-routing-animation-lib';


@Component({
  selector: 'app-features-of-site',
  templateUrl: './features-of-site.component.html',
  styleUrls: ['./features-of-site.component.css']
})
export class FeaturesOfSiteComponent implements OnInit {
  routeElement = ROUTING_ELEMENT;

  ngOnInit(): void {
  }

}
