import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable, Subject, pipe, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class PostService {
  constructor(public http: Http) { }


  postData(url: string, body: Object): Observable<any> {

    const headers: Headers = new Headers({
      "content-type": "application/json"
    });
    headers.append("Access-Control-Allow-Origin", '*');
    let request_data = new URLSearchParams();
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url,
      body, options).pipe(
        retry(3),
        map(response => this.extractData(response)),
        catchError((e: any) => Observable.throw(this.errorHandler(e)))
      );
  }

  postDataWithDifferentApi(url: string, body: Object): Observable<any> {
    let headers = new Headers();
    headers.append("content-type", "application/json");
    headers.append("Access-Control-Allow-Origin", '*');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options).pipe(
      retry(3),
      map(response => response.json()),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }

  postWithHeaderData(url: string, body: Object, orgId: string): Observable<any> {
    const headers: Headers = new Headers({
      "content-type": "application/json"
    });
    headers.append("Access-Control-Allow-Origin", '*');
    headers.append("Organization", orgId);
    let request_data = new URLSearchParams();
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url,
      body, options).pipe(
        retry(3),
        map(response => response.json()),
        catchError((e: any) => Observable.throw(this.errorHandler(e)))
      );
  }

  postDataWithOrgId(url: string, orgId: string, body: Object): Observable<any> {
    const bodyString = JSON.stringify(body);
    const headers: Headers = new Headers({
      "content-type": "application/json"
    });
    headers.append("Organization", orgId);
    const options = new RequestOptions({ headers: headers });

    return this.http.post(url, bodyString, options).pipe(
      retry(3),
      map(response => this.extractData(response)),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }

  extractData(response: Response) {
    console.log(response);
    if (response.status < 200 || response.status >= 300) {
    } else {
      if (response.text()) {
        const body = response.json();
        if (body && body.data) {
          return body.data;
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
}
