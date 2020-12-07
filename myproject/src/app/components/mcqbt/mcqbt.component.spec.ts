import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqbtComponent } from './mcqbt.component';

describe('McqbtComponent', () => {
  let component: McqbtComponent;
  let fixture: ComponentFixture<McqbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
