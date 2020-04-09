import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSideComponent } from './scroll-side.component';

describe('ScrollSideComponent', () => {
  let component: ScrollSideComponent;
  let fixture: ComponentFixture<ScrollSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
