import {Inject} from "@angular/core";
import {Media} from "@spartacus/storefront";
import {Converter} from "@spartacus/core";

@Inject({
  providedIn: 'root'
})
export class ShotWithNormalizer implements Converter<any, Media[]> {

  convert(source: any, target?: Media[]) {
    let shotWithMedias: Media[] = [];

    for (let shotWithMedia of source) {
      let normalizedMedia: Media = {
        src: shotWithMedia.download_url
      }

      shotWithMedias.push(normalizedMedia);
    }
    return shotWithMedias;
  }
}
