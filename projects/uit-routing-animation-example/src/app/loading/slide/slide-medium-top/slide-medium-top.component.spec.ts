import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMediumTopComponent } from './slide-medium-top.component';

describe('SlideMediumTopComponent', () => {
  let component: SlideMediumTopComponent;
  let fixture: ComponentFixture<SlideMediumTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMediumTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMediumTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
