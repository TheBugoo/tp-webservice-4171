import { TestBed } from '@angular/core/testing';

import { HoroscoposService } from './horoscopos.service';

describe('HoroscoposService', () => {
  let service: HoroscoposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscoposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
