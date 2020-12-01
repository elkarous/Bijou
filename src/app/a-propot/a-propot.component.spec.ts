import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APropotComponent } from './a-propot.component';

describe('APropotComponent', () => {
  let component: APropotComponent;
  let fixture: ComponentFixture<APropotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APropotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APropotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
