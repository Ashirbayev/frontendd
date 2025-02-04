import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private apiUrl = 'http://localhost:5000/api/schools'; // Адрес бэкенда

  constructor(private http: HttpClient) {}

  getSchools(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addSchool(name: string): Observable<any> {
    return this.http.post(this.apiUrl, { name });
  }

  deleteSchool(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
