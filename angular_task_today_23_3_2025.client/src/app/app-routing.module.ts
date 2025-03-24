import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Voucher/dashboard/dashboard.component';
import { ShowAllComponent } from './Voucher/show-all/show-all.component';
import { AddVoucherComponent } from './Voucher/add-voucher/add-voucher.component';

const routes: Routes = [
  {
    path: 'Admin', component: DashboardComponent, children:
      [
        { path: 'All', component: ShowAllComponent },
        { path: 'Add', component: AddVoucherComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
