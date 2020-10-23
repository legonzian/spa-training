import {Component} from '@angular/core';
import {ShotWithService} from "./services/shot-with.service";
import {CurrentProductService} from "@spartacus/storefront";

@Component({
  selector: 'shot-with',
  templateUrl: './shot-with.component.html',
  styleUrls: ['./shot-with.component.scss']
})
export class ShotWithComponent {
  public shotWithImages$ = this.shotWithService.getShotWithImages();
  public currentProduct$ = this.currentProductService.getProduct();

  constructor(private shotWithService: ShotWithService, private currentProductService: CurrentProductService) {
  }

}
