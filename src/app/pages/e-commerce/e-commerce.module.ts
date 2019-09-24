import { NgModule } from '@angular/core';
import {
  NbCardModule
} from '@nebular/theme';

import { ECommerceComponent } from './e-commerce.component';

@NgModule({
  imports: [
    NbCardModule
  ],
  declarations: [
    ECommerceComponent,
  ],
  providers: [
  ],
})
export class ECommerceModule { }
