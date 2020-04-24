import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbLowMediumComponent } from './stdb-low-medium.component';

describe('StdbLowMediumComponent', () => {
  let component: StdbLowMediumComponent;
  let fixture: ComponentFixture<StdbLowMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbLowMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbLowMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
