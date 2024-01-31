import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDefaultComponent } from './product-default/product-default.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, ProductDetailsComponent, ProductDefaultComponent, LoginComponent, RegisterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
}
