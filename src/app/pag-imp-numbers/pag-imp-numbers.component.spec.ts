import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagImpNumbersComponent } from './pag-imp-numbers.component';

describe('PagImpNumbersComponent', () => {
  let component: PagImpNumbersComponent;
  let fixture: ComponentFixture<PagImpNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagImpNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagImpNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
