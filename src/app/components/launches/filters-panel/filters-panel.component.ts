import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceXQueryParams } from '../../../services/space-x-launch';
import { map, range, toString } from 'lodash-es';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss']
})
export class FiltersPanelComponent implements OnInit {
  @Output() onFilterChange = new EventEmitter<any>();

  launchYearOptions: string[] = map(range(2006, (new Date()).getFullYear() + 1), toString);

  successLaunchOptions: string[] = ['true', 'false'];

  successLandOptions: string[] = ['true', 'false'];

  appliedFilters: SpaceXQueryParams = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.launch_success) {
        this.appliedFilters.launch_success = params.launch_success;
      }
      if (params.land_success) {
        this.appliedFilters.land_success = params.land_success;
      }
      if (params.launch_year) {
        this.appliedFilters.launch_year = params.launch_year;
      }

      this.onFilterChange.emit(this.appliedFilters);
    });
  }

  updateYearFilter(event: string | undefined) {
    this.updateFilters({ ...this.appliedFilters, launch_year: event });
  }

  updateLaunchFilter(event: string | undefined) {
    let queryValue = undefined;
    if (event === 'true') {
      queryValue = true;
    } else if (event === 'false') {
      queryValue = false;
    }

    this.updateFilters({ ...this.appliedFilters, launch_success: queryValue });
  }

  updateLandFilter(event: string | undefined) {
    let queryValue = undefined;
    if (event === 'true') {
      queryValue = true;
    } else if (event === 'false') {
      queryValue = false;
    }

    this.updateFilters({ ...this.appliedFilters, land_success: queryValue });
  }

  updateFilters(query: SpaceXQueryParams) {
    this.appliedFilters = query;
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: this.appliedFilters, queryParamsHandling: 'merge' });
  }

  toString(value: any) {
    return toString(value);
  }

}
