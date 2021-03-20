import { Component, Input } from '@angular/core';

@Component({
  selector: 'launch-card-item-detail',
  templateUrl: './launch-card-item-detail.component.html',
  styleUrls: ['./launch-card-item-detail.component.scss']
})
export class LaunchCardItemDetailComponent {
  @Input() label: string | null = null;

  @Input() value: any | any[] = null;

  naPlaceholder = 'NA';

  isList() {
    return this.value instanceof Array;
  }

  getValue() {
    return this.value || this.naPlaceholder;
  }

  getValues() {
    return this.isList() && (this.value as any[]).length > 0 ? this.value as string[] : [this.naPlaceholder];
  }
}
