import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeDataComponent } from './edite-data.component';

describe('EditeDataComponent', () => {
  let component: EditeDataComponent;
  let fixture: ComponentFixture<EditeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
