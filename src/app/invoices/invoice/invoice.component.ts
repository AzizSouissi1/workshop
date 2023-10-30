import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../../Core/Models/Invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  idFacture!: number;
  invoice: Invoice | undefined;
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  navigateToInvoice(idFacture: number, active: boolean) {
    this.router.navigate(['Invoice', idFacture, active]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idFacture = +params['idFacture'];
      this.invoice = this.findInvoiceById(this.idFacture);

      if (this.invoice) {
        if (this.invoice.active) {

          this.errorMessage = undefined;
        } else {

          this.errorMessage = "Impossible de visualiser les détails de la facture";
        }
      }
    });
  }

  private findInvoiceById(idFacture: number): Invoice | undefined {

    const invoices: Invoice[] = [
      {
        idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021",
        active: true
      },
      {
        idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020",
        active: true
      },
      {
        idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020",
        active: false
      },
      {
        idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020",
        active: true
      },
    ];

    return invoices.find((invoice) => invoice.idFacture === idFacture);
  }
}
