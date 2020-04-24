import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSideLowComponent } from './scroll-side-low.component';

describe('ScrollSideLowComponent', () => {
  let component: ScrollSideLowComponent;
  let fixture: ComponentFixture<ScrollSideLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSideLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSideLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
