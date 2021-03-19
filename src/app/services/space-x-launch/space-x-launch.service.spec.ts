import { TestBed } from '@angular/core/testing';

import { SpaceXLaunchService } from './space-x-launch.service';

describe('SpaceXLaunchService', () => {
  let service: SpaceXLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
