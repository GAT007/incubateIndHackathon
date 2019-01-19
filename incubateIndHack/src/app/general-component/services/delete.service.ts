import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { retry } from "rxjs/operators";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
import { catchError } from "rxjs/internal/operators/catchError";
@Injectable({
    providedIn: "root"
  })
export class DeleteService {
    constructor(public http: Http) {}
    deleteData(url: string): Observable<any> {
        const headers: Headers = new Headers({
          "content-type": "application/json"
        });
        return this.http.delete(url, { headers: headers }).pipe(
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
              //return body.data;
              return body;
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
      deleteJSON(fileLocation: string): Observable<any> {
        return this.http.get(fileLocation).pipe(
          map(response => this.extractData(response)),
          catchError((e: any) => Observable.throw(this.errorHandler(e)))
        );
      }
}