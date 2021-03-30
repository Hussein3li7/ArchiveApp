import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnFileComponent } from './search-on-file.component';

describe('SearchOnFileComponent', () => {
  let component: SearchOnFileComponent;
  let fixture: ComponentFixture<SearchOnFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOnFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOnFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
