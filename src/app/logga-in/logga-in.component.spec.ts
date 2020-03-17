import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggaInComponent } from './logga-in.component';

describe('LoggaInComponent', () => {
  let component: LoggaInComponent;
  let fixture: ComponentFixture<LoggaInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggaInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggaInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
