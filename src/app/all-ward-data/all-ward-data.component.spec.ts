import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWardDataComponent } from './all-ward-data.component';

describe('AllWardDataComponent', () => {
  let component: AllWardDataComponent;
  let fixture: ComponentFixture<AllWardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWardDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
