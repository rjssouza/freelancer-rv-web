import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { GreenreceiptComponent } from './greenreceipt/greenreceipt.component';
import { GreenreceiptCreateComponent } from './greenreceipt/greenreceipt-create/greenreceipt-create.component';
import { GreenreceiptListComponent } from './greenreceipt/greenreceipt-list/greenreceipt-list.component';
import { GreenreceiptItemComponent } from './greenreceipt/greenreceipt-list/greenreceipt-item/greenreceipt-item.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee/employee-list/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    GreenreceiptComponent,
    GreenreceiptCreateComponent,
    GreenreceiptListComponent,
    GreenreceiptItemComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
