import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
@Input() selectedProduct!: Product;
}

type Product={
  id:number,
  name:string,
  category:string,
  imgUrl:string,
  price:number,
  stock:number
}
