import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../services/admin.service';
import { OrderService } from '../services/order.service';
import { OrderDetailService } from '../services/order-detail.service';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  admins: any[] = [];
  orders: any[] = [];
  orderDetails: any[] = [];
  products: any[] = [];
  customers: any[] = [];
  tenantId: number = 2; // Replace with actual tenant ID as needed
  isNavClosed: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private adminService: AdminService,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadAdmins();
    this.loadOrders();
    this.loadOrderDetails();
    this.loadProducts();
    this.loadCustomers();
  }

  loadAdmins() {
    this.adminService.getAdmins(this.tenantId).subscribe(
      (data: any) => {
        this.admins = data;
        console.log('Admins:', this.admins);
      },
      (error: any) => {
        console.error('ERROR', error);
      }
    );
  }

  loadOrders() {
    this.orderService.getOrders(this.tenantId).subscribe(
      (data: any) => {
        this.orders = data;
        console.log('Orders:', this.orders);
      },
      (error: any) => {
        console.error('ERROR', error);
      }
    );
  }

  loadOrderDetails() {
    this.orderDetailService.getOrderDetails(this.tenantId).subscribe(
      (data: any) => {
        this.orderDetails = data;
        console.log('Order Details:', this.orderDetails);
      },
      (error: any) => {
        console.error('ERROR', error);
      }
    );
  }

  loadProducts() {
    this.productService.getProducts(this.tenantId).subscribe(
      (data: any) => {
        this.products = data;
        console.log('Products:', this.products);
      },
      (error: any) => {
        console.error('ERROR', error);
      }
    );
  }

  loadCustomers() {
    this.customerService.getCustomers(this.tenantId).subscribe(
      (data: any) => {
        this.customers = data;
        console.log('Customers:', this.customers);
      },
      (error: any) => {
        console.error('ERROR', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  trackByAdminId(index: number, admin: any): number {
    return admin.ADMIN_ID;
  }

  trackByOrderId(index: number, order: any): number {
    return order.ORDER_ID;
  }

  trackByOrderDetailId(index: number, orderDetail: any): number {
    return orderDetail.ORDER_DETAIL_ID;
  }

  trackByProductId(index: number, product: any): number {
    return product.PRODUCT_ID;
  }

  trackByCustomerId(index: number, customer: any): number {
    return customer.CUSTOMER_ID;
  }
}
