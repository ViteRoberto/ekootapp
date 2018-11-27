import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRetoPage } from './modal-reto.page';

describe('ModalRetoPage', () => {
  let component: ModalRetoPage;
  let fixture: ComponentFixture<ModalRetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRetoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
