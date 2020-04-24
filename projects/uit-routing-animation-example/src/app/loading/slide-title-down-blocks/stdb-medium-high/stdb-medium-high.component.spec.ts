import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbMediumHighComponent } from './stdb-medium-high.component';

describe('StdbMediumHighComponent', () => {
  let component: StdbMediumHighComponent;
  let fixture: ComponentFixture<StdbMediumHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbMediumHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbMediumHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
