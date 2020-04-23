import { Component, HostBinding } from '@angular/core';
import {ScrollSideComponent} from './loading/scroll-side/scroll-side.component';
import {RotateSxComponent} from './loading/rotate-sx/rotate-sx.component';
import {LeftUpComponent} from './loading/left-up/left-up.component';
import {RightUpComponent} from './loading/right-up/right-up.component';
import {RotateDxComponent} from './loading/rotate-dx/rotate-dx.component';
import {FlipComponent} from './loading/flip/flip.component';
import {FadeBackComponent} from './loading/fade-back/fade-back.component';
import {ScaleAndSlideComponent} from './loading/scale-and-slide/scale-and-slide.component';
import {SurpriseComponent} from './loading/surprise/surprise.component';
import {SlideTitleDownBlocksComponent} from './loading/slide-title-down-blocks/slide-title-down-blocks.component';
import {Rotate3dComponent} from './loading/rotate3d/rotate3d.component';
import {SlideHighBottomComponent} from './loading/slide/slide-high-bottom/slide-high-bottom.component';
import {SlideHighTopComponent} from './loading/slide/slide-high-top/slide-high-top.component';
import {SlideLowTopComponent} from './loading/slide/slide-low-top/slide-low-top.component';
import {SlideLowBottomComponent} from './loading/slide/slide-low-bottom/slide-low-bottom.component';
import {SlideMediumBottomComponent} from './loading/slide/slide-medium-bottom/slide-medium-bottom.component';
import {SlideMediumTopComponent} from './loading/slide/slide-medium-top/slide-medium-top.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
  ]
})

export class AppComponent {
  animationSelected = SlideHighBottomComponent;
  animationString = 'Slide';
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  assignComponent(component) {
    switch (component) {
      case 'slideHighBottom': {
        this.animationSelected = SlideHighBottomComponent;
        this.animationString = 'Slide - Bottom/High';
        break;
      }
      case 'slideHighTop': {
        this.animationSelected = SlideHighTopComponent;
        this.animationString = 'Slide - Top/High';
        break;
      }
      case 'slideLowBottom': {
        this.animationSelected = SlideLowBottomComponent;
        this.animationString = 'Slide - Bottom/Low';
        break;
      }
      case 'slideLowTop': {
        this.animationSelected = SlideLowTopComponent;
        this.animationString = 'Slide - Top/Low';
        break;
      }
      case 'slideMediumBottom': {
        this.animationSelected = SlideMediumBottomComponent;
        this.animationString = 'Slide - Bottom/Medium';
        break;
      }
      case 'slideMediumTop': {
        this.animationSelected = SlideMediumTopComponent;
        this.animationString = 'Slide - Top/Medium';
        break;
      }
      case 'scrollSide': {
        this.animationSelected = ScrollSideComponent;
        this.animationString = 'Scroll Side';
        break;
      }
      case 'rotateSx': {
        this.animationSelected = RotateSxComponent;
        this.animationString = 'Rotate Sx';
        break;
      }
      case 'rotateDx': {
        this.animationSelected = RotateDxComponent;
        this.animationString = 'Rotate Dx';
        break;
      }
      case 'leftUp': {
        this.animationSelected = LeftUpComponent;
        this.animationString = 'Left Up';
        break;
      }
      case 'rightUp': {
        this.animationSelected = RightUpComponent;
        this.animationString = 'Right Up';
        break;
      }
      case 'flip': {
        this.animationSelected = FlipComponent;
        this.animationString = 'Flip';
        break;
      }
      case 'fadeBack': {
        this.animationSelected = FadeBackComponent;
        this.animationString = 'Fade Back';
        break;
      }
      case 'scaleAndSlide': {
          this.animationSelected = ScaleAndSlideComponent;
          this.animationString = 'Scale and Slide';
          break;
      }
      case 'surprise': {
        this.animationSelected = SurpriseComponent;
        this.animationString = 'Surprise';
        break;
      }
      case 'stdb': {
        this.animationSelected = SlideTitleDownBlocksComponent;
        this.animationString = 'Slide Title Down Blocks';
        break;
      }
      case 'rotate3d': {
        this.animationSelected = Rotate3dComponent;
        this.animationString = 'Rotate 3D';
        break;
      }

    }
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
