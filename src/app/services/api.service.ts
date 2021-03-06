import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    public endpoint = environment.api_test_url

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };
  constructor(private http: HttpClient) {}
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  get(url): Promise<any> {
    return this.http.get(this.endpoint + url, this.getHeaders()).toPromise();
  }
  post(url, body): Promise<any> {
    return this.http
      .post<any>(this.endpoint + url, body, this.getHeaders())
      .pipe(map(this.extractData), catchError(this.handleError))
      .toPromise();
  }
  put(url, body): Observable<any> {
    return this.http
      .put(this.endpoint + url, body, this.getHeaders())
      .pipe(map(this.extractData));
  }
  handleError(error) {
    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(error.error);
  }
  delete(url): Observable<any> {
    return this.http
      .delete<any>(this.endpoint + url, this.getHeaders())
      .pipe(map(this.extractData));
  }

  getHeaders() {
    return this.httpOptions
    }
}
