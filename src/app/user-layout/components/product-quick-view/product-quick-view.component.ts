import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-quick-view',
  templateUrl: './product-quick-view.component.html',
  styleUrls: ['./product-quick-view.component.css']
})
export class ProductQuickViewComponent implements OnInit {
  @Input() product: any; // Nhận sản phẩm thông qua input
  isOpen = false; // Biến để điều khiển hiển thị modal
  @Output() closeModal = new EventEmitter<void>(); // Tạo sự kiện để phát ra khi đóng modal
  constructor() {
  }

  ngOnInit(): void {

  }

  // Mở modal
  open() {
    this.isOpen = true;
  }

  // Đóng modal
  close() {
    console.log("Hello")
    this.isOpen = false;
    this.product = null;
    this.closeModal.emit();
  }
}
