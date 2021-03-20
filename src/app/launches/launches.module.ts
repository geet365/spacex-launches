import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { LaunchesComponent } from './launches.component';
import {
  LaunchCardComponent,
  LaunchCardItemDetailComponent,
  FiltersPanelComponent,
  FilterGroupComponent,
  FilterButtonComponent,
  ImgLazyComponent,
} from './components';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchCardComponent,
    LaunchCardItemDetailComponent,
    FiltersPanelComponent,
    FilterGroupComponent,
    FilterButtonComponent,
    ImgLazyComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule,
  ],
  exports: [LaunchesComponent],
})
export class LaunchesModule { }
