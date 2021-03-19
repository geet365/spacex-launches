import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { SpaceXLaunchService } from './space-x-launch.service';
import spaceXLaunchMockData from './space-x-launch.mockData';
import { environment } from 'src/environments/environment';

describe('SpaceXLaunchService', () => {
  let service: SpaceXLaunchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SpaceXLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return launch records', () => {
    const expectedReturn = spaceXLaunchMockData;
    const expectReqUrl = `${environment.spaceXLaunchApiBaseUrl}?limit=100`;

    service.queryAll()
      .subscribe(data =>
        expect(data).toEqual(expectedReturn)
      );

    const req = httpTestingController.expectOne(expectReqUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(expectedReturn);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
