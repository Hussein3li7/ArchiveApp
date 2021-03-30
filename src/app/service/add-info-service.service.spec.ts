import { TestBed } from '@angular/core/testing';

import { AddInfoServiceService } from './add-info-service.service';

describe('AddInfoServiceService', () => {
  let service: AddInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
