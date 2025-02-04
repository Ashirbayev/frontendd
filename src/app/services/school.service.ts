import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private apiUrlT = environment.apiUrl;
  private apiUrl = `${this.apiUrlT}/api/schools`; // Адрес бэкенда

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
