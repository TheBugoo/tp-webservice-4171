import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private _http: HttpClient) {}

  public listarNoticias(categoria: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
        'x-rapidapi-key': 'a0879b53a5msh74e5651284cd745p1025c2jsn43c4eaff2f70',
      }),
    };
    return this._http.get(
      'https://livescore6.p.rapidapi.com/news/list?category=' + categoria,
      httpOptions
    );
  }
}
