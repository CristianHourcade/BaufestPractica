import { TestBed } from '@angular/core/testing';

import { PlayerServicesService } from './player-services.service';

describe('PlayerServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerServicesService = TestBed.get(PlayerServicesService);
    expect(service).toBeTruthy();
  });
});
