import {Component, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {ProductServiceService} from "../../../services/product-service.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  selectedProduct: any;

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  openModal(product: any) {
    this.selectedProduct = product;
    console.log(this.products$)
  }

  onCloseModal() {
    this.selectedProduct = null;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products$ = new BehaviorSubject<Product[]>(products.content);
    });
  }

}
