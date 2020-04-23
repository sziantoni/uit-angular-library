import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLowTopComponent } from './slide-low-top.component';

describe('SlideLowTopComponent', () => {
  let component: SlideLowTopComponent;
  let fixture: ComponentFixture<SlideLowTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideLowTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideLowTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
