import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideStdbComponent } from './slide-stdb.component';

describe('SlideStdbComponent', () => {
  let component: SlideStdbComponent;
  let fixture: ComponentFixture<SlideStdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideStdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideStdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
