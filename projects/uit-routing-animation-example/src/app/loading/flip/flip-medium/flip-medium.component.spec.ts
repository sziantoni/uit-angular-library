import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipMediumComponent } from './flip-medium.component';

describe('FlipMediumComponent', () => {
  let component: FlipMediumComponent;
  let fixture: ComponentFixture<FlipMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
