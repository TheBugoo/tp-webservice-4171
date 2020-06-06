import { TestBed } from '@angular/core/testing';

import { ConversorsService } from './conversors.service';

describe('ConversorsService', () => {
  let service: ConversorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
