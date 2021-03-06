import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  constructor(private http: HttpClient) {}

  getConversor(from: string, to: string, amount: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0879b53a5msh74e5651284cd745p1025c2jsn43c4eaff2f70',
      }),
    };
    return this.http.get(
      `https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`,
      httpOptions
    );
  }
  /* getConversor2(from: string, to: string, q: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
        'X-RapidAPI-Key': '637978f0b9msh538cb43be9e699cp1033a2jsn07b38796549c',
      }),
      params: {
        from:from,
        to:to,
        q:q,
      },
    };
    return this.http.get(
      'https://currency-exchange.p.rapidapi.com/exchange',
      httpOptions
    );
  }*/
  // public listarMoneda(demonto, amonto, valor): Observable<any> {
  // const httpOptions = {
  // headers: new HttpHeaders({
  // 'x-rapidapi-host':
  // 'community-neutrino-currency-conversion.p.rapidapi.com',
  //  'x-rapidapi-key': 'a0879b53a5msh74e5651284cd745p1025c2jsn43c4eaff2f70',
  //}),
  // params: {
  //  'from-type': demonto,
  //  'to-type': amonto,
  //  'from-value': valor,
  //},
  //};
  //return this.http.get(
  //  'https://fixer-fixer-currency-v1.p.rapidapi.com/convert' +
  //    demonto +
  //    '&to-type' +
  //    amonto +
  //   '&from-value' +
  //  valor,
  // httpOptions
  // );
  // }/
  //}
}
