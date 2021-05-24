import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeSaderDataComponent } from './edite-sader-data.component';

describe('EditeSaderDataComponent', () => {
  let component: EditeSaderDataComponent;
  let fixture: ComponentFixture<EditeSaderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeSaderDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeSaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
