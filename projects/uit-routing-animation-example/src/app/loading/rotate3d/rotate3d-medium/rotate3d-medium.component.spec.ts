import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotate3dMediumComponent } from './rotate3d-medium.component';

describe('Rotate3dMediumComponent', () => {
  let component: Rotate3dMediumComponent;
  let fixture: ComponentFixture<Rotate3dMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rotate3dMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotate3dMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
