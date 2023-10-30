import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "mainUser", loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)
  },

  {
    path: "maininvoice", loadChildren: () =>
      import('./invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: "mainProduct", loadChildren: () =>
      import('./product/product.module').then(m => m.ProductModule)
  },

  //{ path: "**", component: ErrorpageComponent } // Place it at the end
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
