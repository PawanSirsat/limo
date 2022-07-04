import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { LoginuserService } from '../loginuser.service';
import { Product } from '../Models/Product';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // caretUp = faCaretUp;
  // caretDown = faCaretDown;


  carts! : Cart[]

  cart! : Cart
  user!: User
  product!: Product

  constructor(private cartService:CartService, private router: Router,private loginuserservice : LoginuserService) { }


  ngOnInit(): void 
  {    
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/user-login')
      return
  }
    
  this.loginuserservice.getUserByToken().subscribe((user : User) => {
            this.user = user;
            this.getItems()
        }, (error : ErrorEvent) => {
            console.log(error)
        })
  }

  getItems () {
    this.cartService.getUserCart(this.user.emailId.toString()).subscribe((cart : Cart[]) => {
        this.carts = cart;
    })
}

getTotal () : Number {
    var reducer = (acc :any, val :any) => acc + val;
    return this.carts ? this.carts.map((item) => item.totalPrice).reduce(reducer) : 0.0
}

increaseQuantity (item : Cart) {
    this.cartService.updateUserCartItem(
        this.user.emailId.toString(), item.product.productid.toString(), item.quantity + 1).subscribe(res => {
        console.log(res)
        this.getItems()
    })
}

decreaseQuantity (item : Cart) {
    if (item.quantity - 1 <= 0) {
        this.cartService.deleteUserCartItem(this.user.emailId.toString(), item.product.productid.toString()).subscribe(res => {
            console.log(res)
            this.getItems()
        })
    } else {
        this.cartService.updateUserCartItem(
            this.user.emailId.toString(), item.product.productid.toString(), item.quantity - 1).subscribe(res => {
            console.log(res)
            this.getItems()
        })
    }
}




}
