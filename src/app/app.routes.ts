import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; 
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { DashboardComponent } from './features/dashboard/dashboard.component'; 

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent},
  { path: 'cart', component: ProductListComponent },
  { path: 'dashboard', component: DashboardComponent }
];
