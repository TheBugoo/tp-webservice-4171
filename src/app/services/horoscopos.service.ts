import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoroscoService {
  constructor(private _http: HttpClient) {}

  public filtrarHoroscopo(sign: string, fecha: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'horoscope5.p.rapidapi.com',
        'x-rapidapi-key': '637978f0b9msh538cb43be9e699cp1033a2jsn07b38796549c',
      }),
      params: {
        sign: sign,
        date: fecha,
      },
    };
    return this._http.get(
      'https://horoscope5.p.rapidapi.com/general/daily/',
      httpOptions
    );
  }
}
