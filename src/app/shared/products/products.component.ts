import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductDetailsComponent } from "../../components/product-details/product-details.component";
import { SearchComponent } from "../../components/search/search.component";
import { CategoryFilterComponent } from "../../components/category-filter/category-filter.component";

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, ProductDetailsComponent, SearchComponent, CategoryFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  ProductsList: Product[] = [
    { id: 1, name: "Wireless Headphones", category: "Phones", imgUrl: "https://picsum.photos/600/401", price: 120, stock: 5 },
    { id: 2, name: "Smartphone", category: "Phones", imgUrl: "https://picsum.photos/600/402", price: 699, stock: 0 },
    { id: 3, name: "Leather Jacket", category: "Clothing", imgUrl: "https://picsum.photos/600/403", price: 250, stock: 2 },
    { id: 4, name: "Sneakers", category: "Clothing", imgUrl: "https://picsum.photos/600/404", price: 90, stock: 10 },
    { id: 5, name: "Sci-Fi Novel", category: "Books", imgUrl: "https://picsum.photos/600/405", price: 20, stock: 8 },
    { id: 6, name: "Cookbook", category: "Books", imgUrl: "https://picsum.photos/600/406", price: 35, stock: 3 },
    { id: 7, name: "Bluetooth Speaker", category: "Phones", imgUrl: "https://picsum.photos/600/407", price: 55, stock: 0 },
    { id: 8, name: "T-shirt", category: "Clothing", imgUrl: "https://picsum.photos/600/408", price: 25, stock: 12 },
  ];

  categories: string[] = [
    "All",
    "Phones",
    "Clothing",
    "Books"
  ];
  ProductsCartList: Product[] = [];
  selectedProduct!: Product;

  receiveSelectedProduct($product: Product) {
    this.selectedProduct = $product;
  }
  selectedCategory: string = "All";
  receiveSelectedCategory($category: string) {
    this.selectedCategory = $category;
  }

  filteredProductsByCategories(): Product[] {
    if (!this.selectedCategory || this.selectedCategory == "All") {
      return this.ProductsList;
    }
    return this.ProductsList.filter(product => {
      return product.category == this.selectedCategory;
    })
  }
  searchedKeyWord!:string;
  receiveSearchKeyword($searchKeyword:string){
    this.searchedKeyWord = $searchKeyword;
    this.filteredProductsBySearchAndCategory();
  }
  filteredProductsBySearchAndCategory():Product[]{
    if(!this.searchedKeyWord){
      return this.filteredProductsByCategories();
    }
    return this.filteredProductsByCategories().filter(product=>{
      return product.name.toLowerCase().includes(this.searchedKeyWord.toLowerCase());
    })
  }
}

type Product = {
  id: number,
  name: string,
  category: string,
  imgUrl: string,
  price: number,
  stock: number
}
