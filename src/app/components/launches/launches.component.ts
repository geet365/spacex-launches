import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchService, SpaceXLaunch } from 'src/app/services/space-x-launch';
import { get } from 'lodash-es';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  launches: SpaceXLaunch[] = [];

  constructor(private spaceXLaunchService: SpaceXLaunchService) {}

  ngOnInit(): void {
    this.spaceXLaunchService.queryAll().subscribe((launches) => {
      this.launches = launches;
    });
  }

  getLandSuccess(launch: SpaceXLaunch): null | boolean {
    return get(launch, 'rocket.first_stage.cores[0].land_success', null);
  }

  getMissionPatchSmall(launch: SpaceXLaunch): string | null {
    return get(launch, 'links.mission_patch_small', null);
  }
}
