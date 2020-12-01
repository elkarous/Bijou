import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosBoutiquesComponent } from './nos-boutiques.component';

describe('NosBoutiquesComponent', () => {
  let component: NosBoutiquesComponent;
  let fixture: ComponentFixture<NosBoutiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosBoutiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosBoutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
