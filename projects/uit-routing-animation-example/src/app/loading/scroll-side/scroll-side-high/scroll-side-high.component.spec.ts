import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSideHighComponent } from './scroll-side-high.component';

describe('ScrollSideHighComponent', () => {
  let component: ScrollSideHighComponent;
  let fixture: ComponentFixture<ScrollSideHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSideHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSideHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
