import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLowBottomComponent } from './slide-low-bottom.component';

describe('SlideLowBottomComponent', () => {
  let component: SlideLowBottomComponent;
  let fixture: ComponentFixture<SlideLowBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideLowBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideLowBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
