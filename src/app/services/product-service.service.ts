import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {PageData} from "../interfaces/PageData";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<PageData<Product>> {
    return this.http.get<PageData<Product>>(API_URL + '/variants');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(API_URL + '/products/' + product.id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(API_URL + '/products/' + id);
  }
}
