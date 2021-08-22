import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleQuotesComponent } from './sample-quotes.component';

describe('SampleQuotesComponent', () => {
  let component: SampleQuotesComponent;
  let fixture: ComponentFixture<SampleQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
