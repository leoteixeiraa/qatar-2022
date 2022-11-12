import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private url: string = 'https://hp-api.herokuapp.com/api/characters';
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllProducts(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results?.map((resProducts: any) => {
          this.apiGetProducts(resProducts.url).subscribe(
            res => resProducts = res
          )

        })
      })
    )
  }

  public apiGetProducts(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map(
      res => res
    ))
  }

  readById(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
    );
  }
}
