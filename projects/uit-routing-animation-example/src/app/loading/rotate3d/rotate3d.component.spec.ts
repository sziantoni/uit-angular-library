import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotate3dComponent } from './rotate3d.component';

describe('Rotate3dComponent', () => {
  let component: Rotate3dComponent;
  let fixture: ComponentFixture<Rotate3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rotate3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotate3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
