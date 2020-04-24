import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbLowLowComponent } from './stdb-low-low.component';

describe('StdbLowLowComponent', () => {
  let component: StdbLowLowComponent;
  let fixture: ComponentFixture<StdbLowLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbLowLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbLowLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
