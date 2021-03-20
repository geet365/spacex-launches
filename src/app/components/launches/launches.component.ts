import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchService, SpaceXLaunch, SpaceXQueryParams } from 'src/app/services/space-x-launch';
import { get } from 'lodash-es';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  isLoading = false;

  launches: SpaceXLaunch[] = [];

  prevFetchReq?: Subscription;

  constructor(private spaceXLaunchService: SpaceXLaunchService) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  getLandSuccess(launch: SpaceXLaunch): null | boolean {
    return get(launch, 'rocket.first_stage.cores[0].land_success', null);
  }

  getMissionPatchSmall(launch: SpaceXLaunch): string | null {
    return get(launch, 'links.mission_patch_small', null);
  }

  fetchLaunches(query: SpaceXQueryParams = {}) {
    this.isLoading = true;
    // Cancel previous request
    if (this.prevFetchReq) {
      this.prevFetchReq.unsubscribe();
    }
    this.prevFetchReq = this.spaceXLaunchService.queryAll(query).subscribe((launches) => {
      this.launches = launches;
      this.isLoading = false;
    });
  }
}
