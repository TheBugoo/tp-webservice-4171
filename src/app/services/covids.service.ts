import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidsService {
  constructor(private http: HttpClient) {}

  public listarPaises(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': 'a0879b53a5msh74e5651284cd745p1025c2jsn43c4eaff2f70',
      }),
    };
    return this.http.get(
      'https://covid-19-tracking.p.rapidapi.com/v1',
      httpOptions
    );
  }
  public filtrarPorPais(country: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '3d86728325msh0aa1110437ce7dep1bfe71jsnd1faee0a6219',
      }),
    };
    return this.http.get(
      `https://covid-19-tracking.p.rapidapi.com/v1/${country}`,
      httpOptions
    );
  }
}
