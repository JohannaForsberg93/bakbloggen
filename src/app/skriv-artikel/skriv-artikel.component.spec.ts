import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkrivArtikelComponent } from './skriv-artikel.component';

describe('SkrivArtikelComponent', () => {
  let component: SkrivArtikelComponent;
  let fixture: ComponentFixture<SkrivArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkrivArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkrivArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
