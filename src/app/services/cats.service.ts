import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private http = inject(HttpClient);
  /*
    Es lo mismo que:
    constructor(private http: HttpClient){ }
  */

  baseUrl = "https://api.thecatapi.com/v1";
  token = "live_ZmujMH7Wosf7tHuMuErhA14VesimCWJ4McScRFdd7BCMARdGdJEMkN7TFDtmz5vR";

  // JS incluye automáticamente un observable al hacer return de un Observable
  getCat(){
    const url = `${this.baseUrl}/images/search`;

    const headers = {
      'x-api-key': this.token
    }
    return this.http.get<any>(url, { headers })
    // Capturar errores
    .pipe(
      catchError((error: any) => {
        console.error('Error fetching cats: ', error);
        throw error;
      }),
    )
  }

  getCats(){
    const url = `${this.baseUrl}/images/search?limit=20`

    const headers = {
       'x-api-key': this.token
    }
    return this.http.get<any[]>(url, { headers })
    .pipe(
      catchError((error: any) => {
        console.error('Error fetching cats: ', error);
        throw error;
      }),
    )
  }
}
