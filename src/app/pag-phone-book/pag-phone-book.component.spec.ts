import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPhoneBookComponent } from './pag-phone-book.component';

describe('PagPhoneBookComponent', () => {
  let component: PagPhoneBookComponent;
  let fixture: ComponentFixture<PagPhoneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagPhoneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
