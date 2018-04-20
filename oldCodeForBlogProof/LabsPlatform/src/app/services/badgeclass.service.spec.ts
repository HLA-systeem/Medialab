import { TestBed, inject } from '@angular/core/testing';

import { BadgeclassService } from './badgeclass.service';

describe('OpenbadgesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadgeclassService]
    });
  });

  it('should be created', inject([BadgeclassService], (service: BadgeclassService) => {
    expect(service).toBeTruthy();
  }));
});
