import { TestBed } from '@angular/core/testing';

import { UescService } from './uesc.service';

describe('UescService', () => {
  let service: UescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
