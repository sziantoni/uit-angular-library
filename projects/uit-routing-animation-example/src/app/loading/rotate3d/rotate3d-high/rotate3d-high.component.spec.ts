import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotate3dHighComponent } from './rotate3d-high.component';

describe('Rotate3dHighComponent', () => {
  let component: Rotate3dHighComponent;
  let fixture: ComponentFixture<Rotate3dHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rotate3dHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotate3dHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
