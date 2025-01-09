import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AllProductComponent } from './product/components/all-product/all-product.component';
import { ProductDetailsComponent } from './product/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

export const routes: Routes = [
  { path: "products", loadComponent: () => import('./product/components/all-product/all-product.component').then(m => m.AllProductComponent) },
  { path: "details/:id", loadComponent: () => import('./product/components/product-details/product-details.component').then(m => m.ProductDetailsComponent) },
  { path: "cart", loadComponent: () => import('./carts/components/cart/cart.component').then(m => m.CartComponent) },
  { path: "**", redirectTo: "products", pathMatch: "full" }
];