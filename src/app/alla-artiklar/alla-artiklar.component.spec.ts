import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaArtiklarComponent } from './alla-artiklar.component';

describe('AllaArtiklarComponent', () => {
  let component: AllaArtiklarComponent;
  let fixture: ComponentFixture<AllaArtiklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllaArtiklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllaArtiklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
