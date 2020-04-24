import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipHighComponent } from './flip-high.component';

describe('FlipHighComponent', () => {
  let component: FlipHighComponent;
  let fixture: ComponentFixture<FlipHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
