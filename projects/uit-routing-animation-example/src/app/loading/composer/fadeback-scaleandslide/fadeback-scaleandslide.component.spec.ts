import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadebackScaleandslideComponent } from './fadeback-scaleandslide.component';

describe('FadebackScaleandslideComponent', () => {
  let component: FadebackScaleandslideComponent;
  let fixture: ComponentFixture<FadebackScaleandslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadebackScaleandslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadebackScaleandslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
