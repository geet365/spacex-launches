import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { SpaceXLaunchService, SpaceXLaunch, SpaceXQueryParams } from 'src/app/services/space-x-launch';
import { get } from 'lodash-es';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const PAGE_SIZE = 12;

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('observeEl') observeEl?: ElementRef;

  private observer?: IntersectionObserver;

  isLoading = false;

  launches: SpaceXLaunch[] = [];

  lastLaunchIndex = PAGE_SIZE;

  prevFetchReq?: Subscription;

  constructor(private spaceXLaunchService: SpaceXLaunchService, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entry, obs) => {
        if (entry[0].isIntersecting) {
          this.renderMore();
        }
      });

      this.observer.observe(this.observeEl?.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  getLandSuccess(launch: SpaceXLaunch): null | boolean {
    return get(launch, 'rocket.first_stage.cores[0].land_success', null);
  }

  getMissionPatchSmall(launch: SpaceXLaunch): string | null {
    return get(launch, 'links.mission_patch_small', null);
  }

  fetchLaunches(query: SpaceXQueryParams = {}): void {
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

  renderMore(): void {
    const nextLastLaunchIndex = this.lastLaunchIndex + PAGE_SIZE;

    if (nextLastLaunchIndex >= this.launches.length) {
      this.lastLaunchIndex = this.launches.length < PAGE_SIZE ? PAGE_SIZE : this.launches.length;
    } else {
      this.lastLaunchIndex = nextLastLaunchIndex;
    }
  }
}
