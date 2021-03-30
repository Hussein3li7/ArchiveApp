import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadirComponent } from './sadir.component';

describe('SadirComponent', () => {
  let component: SadirComponent;
  let fixture: ComponentFixture<SadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
