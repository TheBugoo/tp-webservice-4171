import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PruebasService {
  constructor(private http: HttpClient) {}

  public buscarImagenes(q: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'x-rapidapi-key': 'a0879b53a5msh74e5651284cd745p1025c2jsn43c4eaff2f70',
      }),
      params: {
        q: q,
      },
    };
    return this.http.get(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      httpOptions
    );
  }
}
