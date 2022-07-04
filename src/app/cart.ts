import { Product } from "./product";


export class Cart{
    useremailId!: string;
    product!:Product;
    userid!:number;
    quantity!:number;
    totalPrice! : Number
}
