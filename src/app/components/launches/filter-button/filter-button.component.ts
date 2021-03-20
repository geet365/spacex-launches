import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {
  @Input() isActive = false;

  @Output() filterClick = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(event: MouseEvent): void {
    this.filterClick.emit(event);
  }

}
