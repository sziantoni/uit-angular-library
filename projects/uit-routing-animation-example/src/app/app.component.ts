import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slideBottom} from "../../../uit-routing-animation-lib/src/lib/slideBottom";
import {scrollSide} from "../../../uit-routing-animation-lib/src/lib/scrollSide";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    slideBottom,
    scrollSide
  ]
})

export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
