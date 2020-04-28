import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyArtikelComponent } from './ny-artikel.component';

describe('NyArtikelComponent', () => {
  let component: NyArtikelComponent;
  let fixture: ComponentFixture<NyArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
