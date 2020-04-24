import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbLowHighComponent } from './stdb-low-high.component';

describe('StdbLowHighComponent', () => {
  let component: StdbLowHighComponent;
  let fixture: ComponentFixture<StdbLowHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbLowHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbLowHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
