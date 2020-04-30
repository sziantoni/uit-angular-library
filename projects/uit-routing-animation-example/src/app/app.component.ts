import { Component, HostBinding } from '@angular/core';
import {SlideHighBottomComponent} from './loading/slide/slide-high-bottom/slide-high-bottom.component';
import {SlideHighTopComponent} from './loading/slide/slide-high-top/slide-high-top.component';
import {SlideLowTopComponent} from './loading/slide/slide-low-top/slide-low-top.component';
import {SlideLowBottomComponent} from './loading/slide/slide-low-bottom/slide-low-bottom.component';
import {SlideMediumBottomComponent} from './loading/slide/slide-medium-bottom/slide-medium-bottom.component';
import {SlideMediumTopComponent} from './loading/slide/slide-medium-top/slide-medium-top.component';
import {FlipLowComponent} from './loading/flip/flip-low/flip-low.component';
import {FlipMediumComponent} from './loading/flip/flip-medium/flip-medium.component';
import {FlipHighComponent} from './loading/flip/flip-high/flip-high.component';
import {RotateRightLowComponent} from './loading/rotate/rotate-right-low/rotate-right-low.component';
import {RotateRightMediumComponent} from './loading/rotate/rotate-right-medium/rotate-right-medium.component';
import {RotateRightHighComponent} from './loading/rotate/rotate-right-high/rotate-right-high.component';
import {RotateLeftLowComponent} from './loading/rotate/rotate-left-low/rotate-left-low.component';
import {RotateLeftMediumComponent} from './loading/rotate/rotate-left-medium/rotate-left-medium.component';
import {RotateLeftHighComponent} from './loading/rotate/rotate-left-high/rotate-left-high.component';
import {FadeBackLowComponent} from './loading/fade-back/fade-back-low/fade-back-low.component';
import {FadeBackMediumComponent} from './loading/fade-back/fade-back-medium/fade-back-medium.component';
import {FadeBackHighComponent} from './loading/fade-back/fade-back-high/fade-back-high.component';
import {MoveUpLeftLowComponent} from './loading/moveUp/move-up-left-low/move-up-left-low.component';
import {MoveUpLeftMediumComponent} from './loading/moveUp/move-up-left-medium/move-up-left-medium.component';
import {MoveUpLeftHighComponent} from './loading/moveUp/move-up-left-high/move-up-left-high.component';
import {MoveUpRightLowComponent} from './loading/moveUp/move-up-right-low/move-up-right-low.component';
import {MoveUpRightMediumComponent} from './loading/moveUp/move-up-right-medium/move-up-right-medium.component';
import {MoveUpRightHighComponent} from './loading/moveUp/move-up-right-high/move-up-right-high.component';
import {Rotate3dLowComponent} from './loading/rotate3d/rotate3d-low/rotate3d-low.component';
import {Rotate3dMediumComponent} from './loading/rotate3d/rotate3d-medium/rotate3d-medium.component';
import {Rotate3dHighComponent} from './loading/rotate3d/rotate3d-high/rotate3d-high.component';
import {ScrollSideLowComponent} from './loading/scroll-side/scroll-side-low/scroll-side-low.component';
import {ScrollSideMediumComponent} from './loading/scroll-side/scroll-side-medium/scroll-side-medium.component';
import {ScrollSideHighComponent} from './loading/scroll-side/scroll-side-high/scroll-side-high.component';
import {StdbLowLowComponent} from './loading/slide-title-down-blocks/stdb-low-low/stdb-low-low.component';
import {StdbLowMediumComponent} from './loading/slide-title-down-blocks/stdb-low-medium/stdb-low-medium.component';
import {StdbLowHighComponent} from './loading/slide-title-down-blocks/stdb-low-high/stdb-low-high.component';
import {StdbMediumLowComponent} from './loading/slide-title-down-blocks/stdb-medium-low/stdb-medium-low.component';
import {StdbMediumMediumComponent} from './loading/slide-title-down-blocks/stdb-medium-medium/stdb-medium-medium.component';
import {StdbMediumHighComponent} from './loading/slide-title-down-blocks/stdb-medium-high/stdb-medium-high.component';
import {StdbHighHighComponent} from './loading/slide-title-down-blocks/stdb-high-high/stdb-high-high.component';
import {StdbHighMediumComponent} from './loading/slide-title-down-blocks/stdb-high-medium/stdb-high-medium.component';
import {StdbHighLowComponent} from './loading/slide-title-down-blocks/stdb-high-low/stdb-high-low.component';
import {SurpriseLowComponent} from './loading/surprise/surprise-low/surprise-low.component';
import {SurpriseMediumComponent} from './loading/surprise/surprise-medium/surprise-medium.component';
import {SurpriseHighComponent} from './loading/surprise/surprise-high/surprise-high.component';
import {ScaleAndSlideLowLowComponent} from './loading/scale-and-slide/scale-and-slide-low-low/scale-and-slide-low-low.component';
import {ScaleAndSlideMediumMediumComponent} from './loading/scale-and-slide/scale-and-slide-medium-medium/scale-and-slide-medium-medium.component';
import {ScaleAndSlideHighHighComponent} from './loading/scale-and-slide/scale-and-slide-high-high/scale-and-slide-high-high.component';
import {ScaleAndSlideLowHighComponent} from './loading/scale-and-slide/scale-and-slide-low-high/scale-and-slide-low-high.component';
// tslint:disable-next-line:max-line-length
import {ScaleAndSlideMediumHighComponent} from './loading/scale-and-slide/scale-and-slide-medium-high/scale-and-slide-medium-high.component';
// tslint:disable-next-line:max-line-length
import {ScaleAndSlideHighMediumComponent} from './loading/scale-and-slide/scale-and-slide-high-medium/scale-and-slide-high-medium.component';
import {ScaleAndSlideLowMediumComponent} from './loading/scale-and-slide/scale-and-slide-low-medium/scale-and-slide-low-medium.component';
import {ScaleAndSlideMediumLowComponent} from './loading/scale-and-slide/scale-and-slide-medium-low/scale-and-slide-medium-low.component';
import {ScaleAndSlideHighLowComponent} from './loading/scale-and-slide/scale-and-slide-high-low/scale-and-slide-high-low.component';
import {FadebackSlideComponent} from './loading/composer/fadeback-slide/fadeback-slide.component';
import {MoveupRotateComponent} from './loading/composer/moveup-rotate/moveup-rotate.component';
import {SlideRotateComponent} from './loading/composer/slide-rotate/slide-rotate.component';
import {SlideStdbComponent} from './loading/composer/slide-stdb/slide-stdb.component';
import {StdbRotateComponent} from './loading/composer/stdb-rotate/stdb-rotate.component';
import {SurpriseFlipComponent} from './loading/composer/surprise-flip/surprise-flip.component';
import {FadebackFlipComponent} from './loading/composer/fadeback-flip/fadeback-flip.component';
import {ScaleandslideScrollsideComponent} from './loading/composer/scaleandslide-scrollside/scaleandslide-scrollside.component';
import {ScrollsideFlipComponent} from './loading/composer/scrollside-flip/scrollside-flip.component';
import {FadebackScaleandslideComponent} from './loading/composer/fadeback-scaleandslide/fadeback-scaleandslide.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
  ]
})

export class AppComponent {
  animationSelected = SlideHighBottomComponent;
  animationString = 'Slide - Bottom/High';
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
      case 'scrollSideLow': {
        this.animationSelected = ScrollSideLowComponent;
        this.animationString = 'Scroll Side - Low';
        break;
      }
      case 'scrollSideMedium': {
        this.animationSelected = ScrollSideMediumComponent;
        this.animationString = 'Scroll Side - Medium';
        break;
      }
      case 'scrollSideHigh': {
        this.animationSelected = ScrollSideHighComponent;
        this.animationString = 'Scroll Side - High';
        break;
      }
      case 'rotateRightLow': {
        this.animationSelected = RotateRightLowComponent;
        this.animationString = 'Rotate - Right/Low ';
        break;
      }
      case 'rotateRightMedium': {
        this.animationSelected = RotateRightMediumComponent;
        this.animationString = 'Rotate - Right/Medium ';
        break;
      }
      case 'rotateRightHigh': {
        this.animationSelected = RotateRightHighComponent;
        this.animationString = 'Rotate - Right/High ';
        break;
      }
      case 'rotateLeftLow': {
        this.animationSelected = RotateLeftLowComponent;
        this.animationString = 'Rotate - Left/Low ';
        break;
      }
      case 'rotateLeftMedium': {
        this.animationSelected = RotateLeftMediumComponent;
        this.animationString = 'Rotate - Left/Medium ';
        break;
      }
      case 'rotateLeftHigh': {
        this.animationSelected = RotateLeftHighComponent;
        this.animationString = 'Rotate - Left/High ';
        break;
      }
      case 'moveUpLeftLow': {
        this.animationSelected = MoveUpLeftLowComponent ;
        this.animationString = 'Move Up - Left/Low';
        break;
      }
      case 'moveUpLeftMedium': {
        this.animationSelected = MoveUpLeftMediumComponent;
        this.animationString = 'Move Up - Left/Medium';
        break;
      }   case 'moveUpLeftHigh': {
        this.animationSelected = MoveUpLeftHighComponent;
        this.animationString = 'Move Up - Left/High';
        break;
      }   case 'moveUpRightLow': {
        this.animationSelected = MoveUpRightLowComponent;
        this.animationString = 'Move Up - Right/Low';
        break;
      }   case 'moveUpRightMedium': {
        this.animationSelected = MoveUpRightMediumComponent;
        this.animationString = 'Move Up - Right/Medium';
        break;
      }   case 'moveUpRightHigh': {
        this.animationSelected = MoveUpRightHighComponent;
        this.animationString = 'Move Up - Right/High';
        break;
      }
      case 'flipLow': {
        this.animationSelected = FlipLowComponent;
        this.animationString = 'Flip - Low';
        break;
      }
      case 'flipMedium': {
        this.animationSelected = FlipMediumComponent;
        this.animationString = 'Flip - Medium';
        break;
      }
      case 'flipHigh': {
        this.animationSelected = FlipHighComponent;
        this.animationString = 'Flip - High';
        break;
      }
      case 'fadeBackLow': {
        this.animationSelected = FadeBackLowComponent;
        this.animationString = 'Fade Back - Low';
        break;
      }
      case 'fadeBackMedium': {
        this.animationSelected = FadeBackMediumComponent;
        this.animationString = 'Fade Back - Medium';
        break;
      }
      case 'fadeBackHigh': {
        this.animationSelected = FadeBackHighComponent;
        this.animationString = 'Fade Back - High';
        break;
      }
      case 'scaleAndSlideLowLow': {
        this.animationSelected = ScaleAndSlideLowLowComponent;
        this.animationString = 'Scale and Slide - Low/Low';
        break;

      }
      case 'scaleAndSlideMediumMedium': {
        this.animationSelected = ScaleAndSlideMediumMediumComponent;
        this.animationString = 'Scale and Slide - Medium/Medium';
        break;
      }
      case 'scaleAndSlideHighHigh': {
        this.animationSelected = ScaleAndSlideHighHighComponent;
        this.animationString = 'Scale and Slide - High/High';
        break;
      }
      case 'scaleAndSlideLowHigh': {
        this.animationSelected = ScaleAndSlideLowHighComponent;
        this.animationString = 'Scale and Slide - Low/High';
        break;

      }
      case 'scaleAndSlideMediumHigh': {
        this.animationSelected = ScaleAndSlideMediumHighComponent;
        this.animationString = 'Scale and Slide - Medium/High';
        break;
      }
      case 'scaleAndSlideHighMedium': {
        this.animationSelected = ScaleAndSlideHighMediumComponent;
        this.animationString = 'Scale and Slide - High/Medium';
        break;
      }
      case 'scaleAndSlideLowMedium': {
        this.animationSelected = ScaleAndSlideLowMediumComponent;
        this.animationString = 'Scale and Slide - Low/Medium';
        break;

      }
      case 'scaleAndSlideMediumLow': {
        this.animationSelected = ScaleAndSlideMediumLowComponent;
        this.animationString = 'Scale and Slide - Medium/Low';
        break;
      }
      case 'scaleAndSlideHighLow': {
        this.animationSelected = ScaleAndSlideHighLowComponent;
        this.animationString = 'Scale and Slide - High/Low';
        break;
      }
      case 'surpriseLowLow': {
        this.animationSelected = SurpriseLowComponent;
        this.animationString = 'Surprise - Low';
        break;
      }
      case 'surpriseLow': {
        this.animationSelected = SurpriseLowComponent;
        this.animationString = 'Surprise - Low';
        break;
      }
      case 'surpriseMedium': {
        this.animationSelected = SurpriseMediumComponent;
        this.animationString = 'Surprise - Medium';
        break;
      }
      case 'surpriseHigh': {
        this.animationSelected = SurpriseHighComponent;
        this.animationString = 'Surprise - High';
        break;
      }
      case 'stdbLowLow': {
        this.animationSelected = StdbLowLowComponent;
        this.animationString = 'Slide Title Down Blocks - Low/Low';
        break;
      }
      case 'stdbLowMedium': {
        this.animationSelected = StdbLowMediumComponent;
        this.animationString = 'Slide Title Down Blocks - Low/Medium';
        break;
      }
      case 'stdbLowHigh': {
        this.animationSelected = StdbLowHighComponent;
        this.animationString = 'Slide Title Down Blocks - Low/High';
        break;
      }
      case 'stdbMediumLow': {
        this.animationSelected = StdbMediumLowComponent;
        this.animationString = 'Slide Title Down Blocks - Medium/Low';
        break;
      }
      case 'stdbMediumMedium': {
        this.animationSelected = StdbMediumMediumComponent;
        this.animationString = 'Slide Title Down Blocks - Medium/Medium';
        break;
      }
      case 'stdbMediumHigh': {
        this.animationSelected = StdbMediumHighComponent;
        this.animationString = 'Slide Title Down Blocks - Medium/High';
        break;
      }
      case 'stdbHighHigh': {
        this.animationSelected = StdbHighHighComponent;
        this.animationString = 'Slide Title Down Blocks - High/High';
        break;
      }
      case 'stdbHighMedium': {
        this.animationSelected = StdbHighMediumComponent;
        this.animationString = 'Slide Title Down Blocks - High/Medium';
        break;
      }
      case 'stdbHighLow': {
        this.animationSelected = StdbHighLowComponent;
        this.animationString = 'Slide Title Down Blocks - High/Low';
        break;
      }
      case 'rotate3dLow': {
        this.animationSelected = Rotate3dLowComponent;
        this.animationString = 'Rotate 3D - Low';
        break;
      }
      case 'rotate3dMedium': {
        this.animationSelected = Rotate3dMediumComponent;
        this.animationString = 'Rotate 3D - Medium';
        break;
      }
      case 'rotate3dHigh': {
        this.animationSelected = Rotate3dHighComponent;
        this.animationString = 'Rotate 3D - High';
        break;
      }
      case 'composer1': {
        this.animationSelected = FadebackSlideComponent;
        this.animationString = 'Enter: Slide / Leave: Fade Back ';
        break;
      }
      case 'composer2': {
        this.animationSelected = MoveupRotateComponent;
        this.animationString = 'Enter: Rotate / Leave: Move up ';
        break;
      }
      case 'composer3': {
        this.animationSelected = SlideRotateComponent;
        this.animationString = 'Enter: Rotate / Leave: Slide ';
        break;
      }
      case 'composer4': {
        this.animationSelected = SlideStdbComponent;
        this.animationString = 'Enter: S T D B / Leave: Slide';
        break;
      }
      case 'composer5': {
        this.animationSelected = FadebackFlipComponent;
        this.animationString = 'Enter: Flip / Leave: Fade Back';
        break;
      }
      case 'composer6': {
        this.animationSelected = StdbRotateComponent;
        this.animationString = 'Enter: Rotate / Leave: S T D B';
        break;
      }
      case 'composer7': {
        this.animationSelected = SurpriseFlipComponent;
        this.animationString = 'Enter: Flip / Leave: Surprise';
        break;
      }
      case 'composer8': {
        this.animationSelected = ScaleandslideScrollsideComponent;
        this.animationString = 'Enter: Scroll Side / Leave: Scale and Slide';
        break;
      }
      case 'composer9': {
        this.animationSelected = ScrollsideFlipComponent;
        this.animationString = 'Enter: Flip / Leave: Scroll Side';
        break;
      }
      case 'composer10': {
        this.animationSelected = FadebackScaleandslideComponent;
        this.animationString = 'Enter: Scale and Slide / Leave: Fade Back';
        break;
      }
    }
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
