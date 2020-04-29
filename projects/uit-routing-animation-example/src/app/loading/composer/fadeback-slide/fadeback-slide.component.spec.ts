import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadebackSlideComponent } from './fadeback-slide.component';

describe('FadebackSlideComponent', () => {
  let component: FadebackSlideComponent;
  let fixture: ComponentFixture<FadebackSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadebackSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadebackSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
