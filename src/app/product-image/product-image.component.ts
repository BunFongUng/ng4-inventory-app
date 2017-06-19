import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @HostBinding('class') classes = 'ui small image';
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
