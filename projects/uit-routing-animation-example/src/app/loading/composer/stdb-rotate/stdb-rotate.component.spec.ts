import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbRotateComponent } from './stdb-rotate.component';

describe('StdbRotateComponent', () => {
  let component: StdbRotateComponent;
  let fixture: ComponentFixture<StdbRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdbRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
