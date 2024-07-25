import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AdminService } from './services/admin.service';
import { OrderService } from './services/order.service';
import { OrderDetailService } from './services/order-detail.service';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    AuthService,
    AdminService,
    OrderService,
    OrderDetailService,
    ProductService,
    CustomerService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ]
};
