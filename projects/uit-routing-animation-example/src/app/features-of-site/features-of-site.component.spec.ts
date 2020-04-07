import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesOfSiteComponent } from './features-of-site.component';

describe('FeaturesOfSiteComponent', () => {
  let component: FeaturesOfSiteComponent;
  let fixture: ComponentFixture<FeaturesOfSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesOfSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesOfSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
