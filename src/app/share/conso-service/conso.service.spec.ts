import { TestBed, inject } from '@angular/core/testing';

import { ConsoService } from './conso.service';

describe('ConsoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoService]
    });
  });

  it('should be created', inject([ConsoService], (service: ConsoService) => {
    expect(service).toBeTruthy();
  }));
});
