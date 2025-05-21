import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  ProductsList:Product[]=[
    {id:1,name:"Book",imgUrl:"https://picsum.photos/600/401",price:30,stock:10},
    {id:2,name:"Pen",imgUrl:"https://picsum.photos/600/402",price:15,stock:1},
    {id:3,name:"Watch",imgUrl:"https://picsum.photos/600/403",price:200,stock:0},
  ]
  ProductsCartList:Product[] =[];
  getStock(stock:number):string{
   if (!stock){return 'out of stock'}
   if (stock == 1){return "Only the Last Product is Available Now !"}
   if(stock > 1){return `In Stock: ${stock}`}
   return "";
  }
  addToCart(productId:number):void{
    this.ProductsList.map(product=>{
      if (product.id == productId){product.stock-=1}
      return product;
    })

  }
}
type Product={
  id:number,
  name:string,
  imgUrl:string,
  price:number,
  stock:number
}