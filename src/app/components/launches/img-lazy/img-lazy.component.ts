import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-lazy',
  templateUrl: './img-lazy.component.html',
  styleUrls: ['./img-lazy.component.scss']
})
export class ImgLazyComponent {
  @Input() defaultImage = 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png';

  @Input() image = '';

  @Input() alt?: string | null;
}
