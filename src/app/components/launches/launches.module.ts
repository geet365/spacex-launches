import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import { LaunchCardItemDetailComponent } from './launch-card-item-detail';
import { LaunchCardComponent } from './launch-card/launch-card.component';

@NgModule({
  declarations: [LaunchesComponent, LaunchCardComponent, LaunchCardItemDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [LaunchesComponent],
})
export class LaunchesModule { }
