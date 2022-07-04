import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginuserService } from '../loginuser.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { IProducts } from '../products/IProducts.Interface';
import { User } from '../user';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products! : Product[]
  public product!: Product
  public user! : User
  public isProductInCart! : boolean

  constructor(private productService: ProductService,private cartService: CartService,private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      
    }

    this.loginuserservice.getUserByToken().subscribe((user : User) => {
      this.user = user
      console.log(this.user.emailId);

      this.getCartItem()
  }, (error : ErrorEvent) => {
      console.log(error)
  })

}

addToCart () {
  this.cartService.addToUserCart(this.user.emailId.toString(), this.product.productid.toString()).subscribe(res => {
      this.getCartItem()
  })
}

getCartItem () {
  this.cartService.getCartItem(this.user.emailId.toString(), this.product.productid.toString()).subscribe(res => {
      this.isProductInCart = true
  }, (error : ErrorEvent) => {
      this.isProductInCart = false
  })
}

 listProduct(){
  this.productService.listProduct().subscribe(data => {
    this.products = data;
  });
}
}



  
// products: Array<IProducts> = [
//   {
//   "Id":1,
//   "Name":"Pavillion",
//   "Type":"Laptop",
//   "Price":956
//   },

//   {
//     "Id":1,
//     "Name":"Acer",
//     "Type":"Laptop",
//     "Price":1256
//     },

//     {
//       "Id":1,
//       "Name":"Lenovo",
//       "Type":"Laptop",
//       "Price":756
//       },

//       {
//         "Id":1,
//         "Name":"Prediator",
//         "Type":"Laptop",
//         "Price":890
//         },
//         {
//           "Id":1,
//           "Name":"Lenovo",
//           "Type":"Laptop",
//           "Price":756
//           },
//           {
//             "Id":1,
//             "Name":"Lenovo",
//             "Type":"Laptop",
//             "Price":756
//             }
    
    
// ]