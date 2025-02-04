import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private apiUrlT = environment.apiUrl;
  private apiUrl = `${this.apiUrlT}/api/groups`; // Адрес бэкенда

  constructor(private http: HttpClient) {}

  getGroups(): Observable<any> {
    console.log(this.http.get(this.apiUrl))
    return this.http.get(this.apiUrl);
  }

  addGroup(group: { name: string; school_id: number }): Observable<any> {
    return this.http.post(this.apiUrl, group);
  }


  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
