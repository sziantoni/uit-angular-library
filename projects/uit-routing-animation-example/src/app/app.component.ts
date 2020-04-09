import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  slideBottom,
  scrollSide

} from '../../../uit-routing-animation-lib/src/public-api';
import {SlideBottomComponent} from './loading/slide-bottom/slide-bottom.component';
import {ScrollSideComponent} from './loading/scroll-side/scroll-side.component';
import {SlideTopComponent} from './loading/slide-top/slide-top.component';
import {RotateSxComponent} from './loading/rotate-sx/rotate-sx.component';


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
  animationSelected = SlideBottomComponent;
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  assignComponent(component) {
    switch (component) {
      case 'slideBottom': {
        this.animationSelected = SlideBottomComponent;
        break;
      }
      case 'scrollSide': {
        this.animationSelected = ScrollSideComponent;
        break;
      }
      case 'slideTop': {
        this.animationSelected = SlideTopComponent;
        break;
      }
      case 'rotateSx': {
        this.animationSelected = RotateSxComponent;
        break;
      }
      default : {
        this.animationSelected = SlideBottomComponent;
        break;
      }
    }
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
