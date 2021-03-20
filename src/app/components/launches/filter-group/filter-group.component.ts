import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  @Input() label: string = '';

  @Input() options: string[] = [];

  @Input() selectedOption?: string = undefined;

  @Output() onFilter = new EventEmitter<string | undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = undefined;
    } else {
      this.selectedOption = option;
    }
    this.onFilter.emit(this.selectedOption);
  }

}
