import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-ecommerce',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    }
}
