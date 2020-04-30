import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollsideFlipComponent } from './scrollside-flip.component';

describe('ScrollsideFlipComponent', () => {
  let component: ScrollsideFlipComponent;
  let fixture: ComponentFixture<ScrollsideFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollsideFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollsideFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
