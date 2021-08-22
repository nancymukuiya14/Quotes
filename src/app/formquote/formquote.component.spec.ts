import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormquoteComponent } from './formquote.component';

describe('FormquoteComponent', () => {
  let component: FormquoteComponent;
  let fixture: ComponentFixture<FormquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
