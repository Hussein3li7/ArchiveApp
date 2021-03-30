import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSaderDataComponent } from './all-sader-data.component';

describe('AllSaderDataComponent', () => {
  let component: AllSaderDataComponent;
  let fixture: ComponentFixture<AllSaderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSaderDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
