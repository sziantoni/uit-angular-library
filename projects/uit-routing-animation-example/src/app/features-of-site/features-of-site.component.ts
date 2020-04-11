import { Component, OnInit } from '@angular/core';
import { ROUTING_ELEMENT, ROUTING_ELEMENT_SECOND_LEVEL} from '../../../../uit-routing-animation-lib/src/public-api';


@Component({
  selector: 'app-features-of-site',
  templateUrl: './features-of-site.component.html',
  styleUrls: ['./features-of-site.component.css']
})
export class FeaturesOfSiteComponent implements OnInit {
  routeElement = ROUTING_ELEMENT;
  routeElement2 = ROUTING_ELEMENT_SECOND_LEVEL;

  ngOnInit(): void {
  }

}
