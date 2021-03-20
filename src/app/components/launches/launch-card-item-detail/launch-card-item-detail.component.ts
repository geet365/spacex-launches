import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch-card-item-detail',
  templateUrl: './launch-card-item-detail.component.html',
  styleUrls: ['./launch-card-item-detail.component.scss']
})
export class LaunchCardItemDetailComponent {
  @Input() label: string | null = null;

  @Input() value: any | any[] = null;

  naPlaceholder = 'NA';

  isList(): boolean {
    return this.value instanceof Array;
  }

  getValue(): any {
    return this.value || this.naPlaceholder;
  }

  getValues(): string[] {
    return this.isList() && (this.value as any[]).length > 0 ? this.value as string[] : [this.naPlaceholder];
  }
}
