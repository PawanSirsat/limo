import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) 
   {   }

   public addProduct(product?: Product): Observable<Object> 
{
  return this.httpClient.post("http://localhost:8090/api/v1/addproduct",product);
}

public  listProduct(): Observable<Product[]> {
  return this.httpClient.get<Product[]>("http://localhost:8090/api/v1/allproducts");
}



}
