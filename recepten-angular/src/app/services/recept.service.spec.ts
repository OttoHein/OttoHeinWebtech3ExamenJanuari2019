import { TestBed } from '@angular/core/testing';

import { ReceptService } from './recept.service';

describe('ReceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceptService = TestBed.get(ReceptService);
    expect(service).toBeTruthy();
  });
});
