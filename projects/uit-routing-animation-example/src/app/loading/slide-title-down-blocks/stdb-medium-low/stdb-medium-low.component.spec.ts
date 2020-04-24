import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbMediumLowComponent } from './stdb-medium-low.component';

describe('StdbMediumLowComponent', () => {
  let component: StdbMediumLowComponent;
  let fixture: ComponentFixture<StdbMediumLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbMediumLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbMediumLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
