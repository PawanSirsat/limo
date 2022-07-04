import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product = new Product;
  public userFiles: any = File;
  msg = '';

  constructor(private productService: ProductService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z].*")]),
    productDis: new FormControl('', [Validators.minLength(10), Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(1), Validators.maxLength(100)]),
    productDisLong: new FormControl('', [Validators.minLength(10), Validators.required]),
    productImgUrl: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required,  Validators.pattern("[a-zA-Z].*")]),
    type: new FormControl('', [Validators.required,  Validators.pattern("[a-zA-Z].*")]),
    brand: new FormControl('', [Validators.required,  Validators.pattern("[a-zA-Z].*")]),
    ram: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    hdd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    price: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),


  });

  addProduct() {
    console.log(this.productForm.value);
    this.productService.addProduct(this.productForm.value).subscribe(
      data => {
        this.router.navigate(['/product'])
        alert("Product Added Successfully")
      },
      error => {
        this.msg = "Product Alredy Added"
        // alert("Invalid Id Password")
      }
    );
  }



  get productName(): any {
    return this.productForm.get('productName');
  }

  get productDis(): any {
    return this.productForm.get("productDis");
  }

  get productDisLong(): any {
    return this.productForm.get("productDisLong");
  }

  get quantity(): any {
    return this.productForm.get("quantity");
  }

  get productImg(): any {
    return this.productForm.get("productImg");
  }

  
  get categoryName(): any {
    return this.productForm.get("categoryName");
  }

  get type(): any {
    return this.productForm.get("type");
  }

  get brand(): any {
    return this.productForm.get("brand");
  }

  get ram(): any {
    return this.productForm.get("ram");
  }
  get hdd(): any {
    return this.productForm.get("hdd");
  }
  get price(): any {
    return this.productForm.get("price");
  }

get productImgUrl():any{
  return this.productForm.get("productImg");
}

}
