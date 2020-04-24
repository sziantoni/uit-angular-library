import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBackLowComponent } from './fade-back-low.component';

describe('FadeBackLowComponent', () => {
  let component: FadeBackLowComponent;
  let fixture: ComponentFixture<FadeBackLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeBackLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeBackLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
