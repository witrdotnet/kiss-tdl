import { TestBed, inject } from '@angular/core/testing';

import { TdlService } from './tdl.service';

describe('TdlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TdlService]
    });
  });

  it('should be created', inject([TdlService], (service: TdlService) => {
    expect(service).toBeTruthy();
  }));
});
