import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConverterService} from "@spartacus/core";
import {IMAGES_NORMALIZER} from "./converters";

@Injectable({
  providedIn: 'root'
})
export class ShotWithService {
  constructor(private http: HttpClient, protected converter: ConverterService) {
  }

  getShotWithImages(): Observable<any> {
    return this.http
      .get(`https://picsum.photos/v2/list?page=1&limit=6`)
      .pipe(
        this.converter.pipeable(IMAGES_NORMALIZER)
      );
  }
}
