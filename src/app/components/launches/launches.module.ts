import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesComponent } from './launches.component';
import { LaunchCardItemDetailComponent } from './launch-card-item-detail';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { FiltersPanelComponent } from './filters-panel/filters-panel.component';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';

@NgModule({
  declarations: [LaunchesComponent, LaunchCardComponent, LaunchCardItemDetailComponent, FiltersPanelComponent, FilterGroupComponent, FilterButtonComponent],
  imports: [
    CommonModule,
  ],
  exports: [LaunchesComponent],
})
export class LaunchesModule { }
