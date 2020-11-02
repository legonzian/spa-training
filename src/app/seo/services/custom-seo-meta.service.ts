import {Injectable} from "@angular/core";
import {SeoMetaService} from "@spartacus/storefront";
import {Meta, Title} from "@angular/platform-browser";
import {PageMetaService} from "@spartacus/core";
import {Subscription} from "rxjs";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomSeoMetaService extends SeoMetaService {


  constructor(
    ngTitle: Title,
    ngMeta: Meta,
    pageMetaService: PageMetaService
  ) {
    super(ngTitle, ngMeta, pageMetaService);
  }


}
