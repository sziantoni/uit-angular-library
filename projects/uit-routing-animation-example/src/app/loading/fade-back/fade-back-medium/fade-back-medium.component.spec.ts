import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBackMediumComponent } from './fade-back-medium.component';

describe('FadeBackMediumComponent', () => {
  let component: FadeBackMediumComponent;
  let fixture: ComponentFixture<FadeBackMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeBackMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeBackMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
