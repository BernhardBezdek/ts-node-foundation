import { TestBed, inject } from '@angular/core/testing';

import { InvitrService } from './invitr.service';

describe('InvitrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitrService]
    });
  });

  it('should be created', inject([InvitrService], (service: InvitrService) => {
    expect(service).toBeTruthy();
  }));
});
