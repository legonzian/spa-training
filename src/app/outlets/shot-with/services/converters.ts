import {Converter} from "@spartacus/core";
import {InjectionToken} from "@angular/core";
import {Media} from "@spartacus/storefront";

export const IMAGES_NORMALIZER = new InjectionToken<Converter<any, Media>>(
  'ImagesNormalizer'
);
