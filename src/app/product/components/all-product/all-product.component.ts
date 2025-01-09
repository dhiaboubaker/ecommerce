import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servises/products.service';
import { CommonModule } from '@angular/common';
import { SelectComponent } from "../../../shared/components/select/select.component";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, SelectComponent, ProductComponent],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {
  
  products: any[] = [];
  categories:string[] = [];


  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategories()
  }

  getProduct(){
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    },
    
    (error) => {
      console.error('Erreur lors du chargement des produits', error);
    });
  }

  
  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      console.log(res);
      this.categories = res
    }, error => {
      console.error('Erreur lors du chargement des Categories', error);
    });
  }

   
  filterCategory(event:any) {
    let value = event.target.value;
   (value == "all") ? this.getProduct() : this.getProductsCategory(value)
   
  }

  getProductsCategory(keyword:string) {
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.products = res
    })
  }
}
