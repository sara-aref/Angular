import { Routes, RouterLink, RouterLinkActive} from '@angular/router';
import { ProductDefaultComponent } from './product-default/product-default.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const routes: Routes = [
  {
    path: "",
    component: ProductDefaultComponent,
    title: "Products"
  },
  {
    path: "app-login",
    component: LoginComponent,
    title: "Login"
  },
  {
    path: "app-register",
    component: RegisterComponent,
    title: "Register"
  },
  {
    path: 'app-cart',
    component: CartComponent,
    title: "Add to Cart"
  },
  {
    path: 'app-product-details/:id',
    component: ProductDetailsComponent,
    title: "Product Details"
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: "Not Found"
  }
];
