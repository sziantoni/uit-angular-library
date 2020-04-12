import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBackComponent } from './fade-back.component';

describe('FadeBackComponent', () => {
  let component: FadeBackComponent;
  let fixture: ComponentFixture<FadeBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
