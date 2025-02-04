// В файле user.service.ts
import { environment } from '../../environments/environment'; // Импортируешь конфиг

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlT = environment.apiUrl; // Используешь URL из конфигурации

  private apiUrl = `${this.apiUrlT}/api/users`; // Замените на ваш реальный API

  constructor(private http: HttpClient) {}

  // Метод для фильтрации пользователей через POST
  filterUsers(params: any): Observable<any[]> {
    console.log(params)
    this.http.post<any[]>(`${this.apiUrl}/filter`, params).subscribe(   (data) => {
        console.log(data); // Логируем данные, когда они приходят
      },
      (error) => {
        console.error('Произошла ошибка при фильтрации:', error); // Логируем ошибку, если она возникла
      })
    return this.http.post<any[]>(`${this.apiUrl}/filter`, params);
  }

   addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}



// // В файле user.service.ts
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private apiUrl = 'http://localhost:3000/api/users'; // Замените на ваш реальный API
//
//   constructor(private http: HttpClient) {}
//
//   // Метод для получения списка пользователей с фильтрацией
//   filterUsers(params: any): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/filter`, { params });
//   }
//
//
//  addUser(user: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, user);
//   }
// }
