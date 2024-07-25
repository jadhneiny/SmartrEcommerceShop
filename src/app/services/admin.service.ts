import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:5242/api/admin';

  constructor(private http: HttpClient) { }

  getAdmins(tenantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${tenantId}`);
  }
}
