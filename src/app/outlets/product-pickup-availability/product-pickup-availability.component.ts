import {Component, OnInit} from '@angular/core';
import {CurrentProductService} from "@spartacus/storefront";

@Component({
  selector: 'product-pickup-availability',
  templateUrl: './product-pickup-availability.component.html',
  styleUrls: ['./product-pickup-availability.component.scss']
})
export class ProductPickupAvailabilityComponent implements OnInit {
  public product$ = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {
  }

  ngOnInit(): void {
  }

}
