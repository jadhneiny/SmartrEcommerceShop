import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:5242/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(tenantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tenant/${tenantId}`);
  }
}
