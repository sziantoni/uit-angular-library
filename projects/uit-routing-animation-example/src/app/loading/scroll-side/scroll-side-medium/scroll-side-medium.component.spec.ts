import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSideMediumComponent } from './scroll-side-medium.component';

describe('ScrollSideMediumComponent', () => {
  let component: ScrollSideMediumComponent;
  let fixture: ComponentFixture<ScrollSideMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSideMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSideMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
