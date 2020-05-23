import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PericiaComponent } from './pericia.component';

describe('PericiaComponent', () => {
  let component: PericiaComponent;
  let fixture: ComponentFixture<PericiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PericiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PericiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
