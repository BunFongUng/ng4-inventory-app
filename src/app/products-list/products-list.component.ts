import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsList;
  @Output() onProductSelected;

  constructor() { }

  ngOnInit() {
  }

}