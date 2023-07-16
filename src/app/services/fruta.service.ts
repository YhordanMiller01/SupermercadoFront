import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fruta } from 'src/app/interfaces/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  private apiURL = "http://localhost:8000/api/fruta/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  indexFruta(): Observable<Fruta[]> {
    return this.httpClient.get<Fruta[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  crearFruta(fruta:any): Observable<Fruta> {
    return this.httpClient.post<Fruta>(this.apiURL, JSON.stringify(fruta), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  ActualizarFruta(id:any, fruta:any): Observable<Fruta> {
    return this.httpClient.put<Fruta>(this.apiURL + id, JSON.stringify(fruta), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  eliminarFruta(id:any){
    return this.httpClient.delete<Fruta>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
