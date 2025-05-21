import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() ProductsList!:Product[];
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
  // selectedProduct!:Product;
  @Output() onSelectProduct = new EventEmitter<Product>();
  sendSelectedProduct(selectedProduct:Product){
    this.onSelectProduct.emit(selectedProduct)
  }
}

type Product={
  id:number,
  name:string,
  category:string,
  imgUrl:string,
  price:number,
  stock:number
}
