import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotate3dLowComponent } from './rotate3d-low.component';

describe('Rotate3dLowComponent', () => {
  let component: Rotate3dLowComponent;
  let fixture: ComponentFixture<Rotate3dLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rotate3dLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotate3dLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
