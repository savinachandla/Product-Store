import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, } from '@angular/common'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    title: '',
    description: '',
    price: 0,
    image: '',
    category: ''
  };

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) {}

  addProduct() {
    if (!this.authService.isLoggedIn()) {
      alert('You must be logged in to add a product.');
      return;
    }

    this.productService.addProduct(this.product).subscribe(
      (response) => {
        alert('Product added successfully');
        console.log('added product', response)
        this.router.navigate(['/']); 
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
