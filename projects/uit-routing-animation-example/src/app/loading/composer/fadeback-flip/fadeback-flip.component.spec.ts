import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadebackFlipComponent } from './fadeback-flip.component';

describe('FadebackFlipComponent', () => {
  let component: FadebackFlipComponent;
  let fixture: ComponentFixture<FadebackFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadebackFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadebackFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
