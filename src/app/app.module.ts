import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { DpAppRoutes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(DpAppRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports: [RouterModule,AppComponent]
})
export class AppModule { }
