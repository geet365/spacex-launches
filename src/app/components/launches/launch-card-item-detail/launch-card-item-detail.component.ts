import { Component, Input } from '@angular/core';

@Component({
  selector: 'launch-card-item-detail',
  templateUrl: './launch-card-item-detail.component.html',
  styleUrls: ['./launch-card-item-detail.component.scss']
})
export class LaunchCardItemDetailComponent {
  @Input() label: string | null = null;

  @Input() value: string | null | string[] = null;

  isList() {
    return this.value instanceof Array;
  }
}
