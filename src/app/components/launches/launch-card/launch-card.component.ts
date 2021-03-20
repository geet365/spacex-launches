import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
})
export class LaunchCardComponent {
  @Input() avatarUrl: string | null = null;

  @Input() name: string = '';

  @Input() missionIds: string[] = [];

  @Input() launchYear: string | null = null;

  @Input() launchSuccess: boolean | null = null;

  @Input() landSuccess: boolean | null = null;
}
