import {Component, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {ProductServiceService} from "../../../services/product-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  selectedProduct: any;

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.getProducts();

  }

  openModal(product: any) {
    this.selectedProduct = product; // Gán sản phẩm được chọn
    console.log(this.products)
  }
  onCloseModal() {
    this.selectedProduct = null; // Đặt về null khi modal đóng
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
