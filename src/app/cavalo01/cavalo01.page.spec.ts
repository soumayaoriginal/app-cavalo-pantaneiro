import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cavalo01Page } from './cavalo01.page';

describe('Cavalo01Page', () => {
  let component: Cavalo01Page;
  let fixture: ComponentFixture<Cavalo01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cavalo01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cavalo01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
