import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:5242/api/products';

  constructor(private http: HttpClient) { }

  getProducts(tenantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${tenantId}`);
  }
}
