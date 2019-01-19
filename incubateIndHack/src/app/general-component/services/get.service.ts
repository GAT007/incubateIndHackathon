import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { catchError, retry } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class GetService {
  constructor(public http: Http) {}

  getData(url: string): Observable<any> {
    const headers: Headers = new Headers({
      "content-type": "application/json"	   
    });
    headers.append("Access-Control-Allow-Origin", '*');
    return this.http.get(url, { headers: headers }).pipe(
      retry(3),
      map(response => this.extractData(response)),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }



  getDataWithHeaders(url: string): Observable<any> {
    let headers = new Headers();
    headers.append("content-type","application/json");
    return this.http.get(url, { headers: headers }).pipe(
      retry(3),
      map(response => response.json()),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }

  extractData(response: Response) {
    console.log(response);
    if (response.status < 200 || response.status >= 300) {
    } else {
      if (response.text()) {
        const body = response.json();
        if (body && body.content) {
          return body.content;
        }
        return body || {};
      } else {
        return {};
      }
    }
  }

  errorHandler(error: any) {
    console.log(error);
    if (error.status < 200 || error.status >= 300) {
      throw new Error("This request has failed " + error.status);
    }
    return error;
  }

  getJSON(fileLocation: string): Observable<any> {
    return this.http.get(fileLocation).pipe(
      map(response => this.extractData(response)),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }

  getWithHeadersJSON(fileLocation: string): Observable<any> {
    return this.http.get(fileLocation).pipe(
      map(response => response.json()),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }

  getUserContext(url: string): Observable<any> {
    let headers = new Headers();
    headers.append("content-type","application/json");
     return this.http.get(url, { headers: headers }).pipe(
      retry(3),
      map(response => response.json()),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }
  

  getDataWholeData(url: string,orgId: string): Observable<any> {
    let headers = new Headers();
    headers.append("content-type","application/json");
    headers.append("Organization", orgId);
    return this.http.get(url, { headers: headers }).pipe(
      retry(3),
      map(response => response),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }
}
