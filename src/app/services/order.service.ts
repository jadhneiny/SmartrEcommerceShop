import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:5242/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(tenantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tenant/${tenantId}`);
  }
}
