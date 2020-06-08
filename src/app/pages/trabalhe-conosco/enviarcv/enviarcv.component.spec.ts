import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarcvComponent } from './enviarcv.component';

describe('EnviarcvComponent', () => {
  let component: EnviarcvComponent;
  let fixture: ComponentFixture<EnviarcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
