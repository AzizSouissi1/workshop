import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';


@NgModule({
  declarations: [InvoiceComponent, InvoiceListComponent, MainInvoiceComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
