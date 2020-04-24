import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbMediumMediumComponent } from './stdb-medium-medium.component';

describe('StdbMediumMediumComponent', () => {
  let component: StdbMediumMediumComponent;
  let fixture: ComponentFixture<StdbMediumMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbMediumMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbMediumMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
