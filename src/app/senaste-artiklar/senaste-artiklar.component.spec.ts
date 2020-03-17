import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenasteArtiklarComponent } from './senaste-artiklar.component';

describe('SenasteArtiklarComponent', () => {
  let component: SenasteArtiklarComponent;
  let fixture: ComponentFixture<SenasteArtiklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenasteArtiklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenasteArtiklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
