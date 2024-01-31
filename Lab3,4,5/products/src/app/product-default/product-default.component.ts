import { CurrencyPipe, NgStyle} from '@angular/common';
import { Component } from '@angular/core';
import { Products } from '../interface/products';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { ProductRequestsService } from '../services/product-requests.service';


@Component({
  selector: 'app-product-default',
  standalone: true,
  imports: [CurrencyPipe, NgStyle],
  templateUrl: './product-default.component.html',
  styleUrl: './product-default.component.css'
})
export class ProductDefaultComponent {

  products ?: Array<Products>;
  counter = 0;

  constructor(
    private router : Router,
    private counterService : CounterService,
    private productRequest : ProductRequestsService
    ) {}

  redirectToDetails(id : number) {
    this.router.navigate(['app-product-details', id]);
  }

  ngOnInit() {
    this.productRequest.getProductList().subscribe((res : any) => this.products = res["products"]);
    this.counterService.getcounter().subscribe((value) => this.counter = value);
  }

  addToCart() {
    this.counterService.updateCounter(this.counter + 1);
  }

}
