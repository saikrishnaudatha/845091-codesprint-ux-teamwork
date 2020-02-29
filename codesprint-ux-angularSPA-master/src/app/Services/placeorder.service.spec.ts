import { TestBed } from '@angular/core/testing';

import { PlaceorderService } from './placeorder.service';

describe('PlaceorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceorderService = TestBed.get(PlaceorderService);
    expect(service).toBeTruthy();
  });
});
