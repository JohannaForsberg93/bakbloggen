import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsidaComponent } from './startsida.component';

describe('StartsidaComponent', () => {
  let component: StartsidaComponent;
  let fixture: ComponentFixture<StartsidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
