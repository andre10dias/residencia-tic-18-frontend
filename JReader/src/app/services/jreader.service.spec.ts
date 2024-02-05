import { TestBed } from '@angular/core/testing';

import { JreaderService } from './jreader.service';

describe('JreaderService', () => {
  let service: JreaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JreaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
