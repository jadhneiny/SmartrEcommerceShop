import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private baseUrl = 'http://localhost:5242/api/orderDetails';

  constructor(private http: HttpClient) { }

  getOrderDetails(tenantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${tenantId}`);
  }
}
