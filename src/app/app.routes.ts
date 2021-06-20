import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';


export const DpAppRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: 'manage-orders',
    component: OrdersComponent
  },
];
