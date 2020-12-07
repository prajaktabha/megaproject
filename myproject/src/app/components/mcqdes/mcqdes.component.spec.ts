import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqdesComponent } from './mcqdes.component';

describe('McqdesComponent', () => {
  let component: McqdesComponent;
  let fixture: ComponentFixture<McqdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
