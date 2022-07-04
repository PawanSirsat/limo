import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseURL = "http://localhost:8090/api/v1";

   constructor(
    private httpClient: HttpClient,
   
  ) { }

  // getCartValue(useremailId: string): Observable<Cart>{
  //   return this.httpClient.get<Cart>(`${this.baseURL}/cart-items/${useremailId}`);
  // }

  getCartItem (useremailId : string, productid : string) : Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.baseURL}/cart-items/${useremailId}/${productid}`)
}

addToUserCart (useremailId : string, productid : string) : Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/users/${useremailId}/cart/add/${productid}`, {
    })
}

getUserCart (useremailId : string) : Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseURL}/users${useremailId}/cart`)
}

updateUserCartItem (useremailId : string, productid : string, quantity : Number) : Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/users/${useremailId}/cart/update/${productid}`, {
        quantity
    })
}

deleteUserCartItem (useremailId : string, productid : string) : Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/users/${useremailId}/cart/remove/${productid}`)
}

}
