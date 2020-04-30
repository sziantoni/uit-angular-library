import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleandslideScrollsideComponent } from './scaleandslide-scrollside.component';

describe('ScaleandslideScrollsideComponent', () => {
  let component: ScaleandslideScrollsideComponent;
  let fixture: ComponentFixture<ScaleandslideScrollsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleandslideScrollsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleandslideScrollsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
