import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Voucher/dashboard/dashboard.component';
import { ShowAllComponent } from './Voucher/show-all/show-all.component';
import { AddVoucherComponent } from './Voucher/add-voucher/add-voucher.component';
import { EditVoucherComponent } from './Voucher/edit-voucher/edit-voucher.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShowAllComponent,
    AddVoucherComponent,
    EditVoucherComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
