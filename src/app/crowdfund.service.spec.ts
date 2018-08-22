import { TestBed, inject } from '@angular/core/testing';

import { CrowdfundService } from './crowdfund.service';

describe('CrowdfundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrowdfundService]
    });
  });

  it('should be created', inject([CrowdfundService], (service: CrowdfundService) => {
    expect(service).toBeTruthy();
  }));
});
