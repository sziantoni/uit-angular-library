import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBackHighComponent } from './fade-back-high.component';

describe('FadeBackHighComponent', () => {
  let component: FadeBackHighComponent;
  let fixture: ComponentFixture<FadeBackHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeBackHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeBackHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
