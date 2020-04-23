import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesOfSiteComponent } from './features-of-site/features-of-site.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ScrollSideComponent } from './loading/scroll-side/scroll-side.component';
import { RotateSxComponent } from './loading/rotate-sx/rotate-sx.component';
import { PageExampleComponent } from './page-example/page-example.component';
import { LeftUpComponent } from './loading/left-up/left-up.component';
import { RightUpComponent } from './loading/right-up/right-up.component';
import { RotateDxComponent } from './loading/rotate-dx/rotate-dx.component';
import { FlipComponent } from './loading/flip/flip.component';
import { FadeBackComponent } from './loading/fade-back/fade-back.component';
import { ScaleAndSlideComponent } from './loading/scale-and-slide/scale-and-slide.component';
import { SurpriseComponent } from './loading/surprise/surprise.component';
import { SlideTitleDownBlocksComponent } from './loading/slide-title-down-blocks/slide-title-down-blocks.component';
import { Rotate3dComponent } from './loading/rotate3d/rotate3d.component';
import { SlideHighBottomComponent} from './loading/slide/slide-high-bottom/slide-high-bottom.component';
import { SlideMediumTopComponent } from './loading/slide/slide-medium-top/slide-medium-top.component';
import { SlideMediumBottomComponent } from './loading/slide/slide-medium-bottom/slide-medium-bottom.component';
import { SlideLowBottomComponent } from './loading/slide/slide-low-bottom/slide-low-bottom.component';
import { SlideLowTopComponent } from './loading/slide/slide-low-top/slide-low-top.component';
import { SlideHighTopComponent } from './loading/slide/slide-high-top/slide-high-top.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeaturesOfSiteComponent,
    ScrollSideComponent,
    RotateSxComponent,
    PageExampleComponent,
    LeftUpComponent,
    RightUpComponent,
    RotateDxComponent,
    FlipComponent,
    FadeBackComponent,
    ScaleAndSlideComponent,
    SurpriseComponent,
    SlideTitleDownBlocksComponent,
    Rotate3dComponent,
    SlideHighBottomComponent,
    SlideMediumTopComponent,
    SlideMediumBottomComponent,
    SlideLowBottomComponent,
    SlideLowTopComponent,
    SlideHighTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, data: {animation: 'scrollLeft'}},
      {path: 'about', component: AboutComponent},
      {path: 'features', component: FeaturesOfSiteComponent, data: {animation: 'scrollRight'}},
      {path: 'page-example', component: PageExampleComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
