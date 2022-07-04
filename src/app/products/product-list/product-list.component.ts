
import { Component, OnInit } from '@angular/core';
// import { ItemsService } from 'src/app/services/items.service';
import { IProducts } from '../IProducts.Interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Array<IProducts> = [
    {
    "Id":1,
    "Name":"Pavillion",
    "Type":"Laptop",
    "Price":956
    },

    {
      "Id":1,
      "Name":"Acer",
      "Type":"Laptop",
      "Price":1256
      },

      {
        "Id":1,
        "Name":"Lenovo",
        "Type":"Laptop",
        "Price":756
        },

        {
          "Id":1,
          "Name":"Prediator",
          "Type":"Laptop",
          "Price":890
          },
          {
            "Id":1,
            "Name":"Lenovo",
            "Type":"Laptop",
            "Price":756
            },
            {
              "Id":1,
              "Name":"Lenovo",
              "Type":"Laptop",
              "Price":756
              }
      
      
]

  constructor() { }

  ngOnInit(): void {}

}
