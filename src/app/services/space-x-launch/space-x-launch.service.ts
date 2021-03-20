import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { forEach, toString } from 'lodash-es';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { QueryParams, constructQueryParams } from 'src/app/helpers';

export type SpaceXLaunch = Record<string, any>;
export type SpaceXQueryParams = { launch_success?: boolean, land_success?: boolean, launch_year?: number };

@Injectable({
  providedIn: 'root',
})
export class SpaceXLaunchService {
  private baseUrl = environment.spaceXLaunchApiBaseUrl;

  private defaultQueryParams = { limit: 100 };

  constructor(private http: HttpClient) {}

  private getParams(queryParams: QueryParams = {}): HttpParams {
    const finalQueryParams = Object.assign({}, this.defaultQueryParams, queryParams);

    return constructQueryParams(finalQueryParams);
  }

  private transformToCompatibleQuery(query: SpaceXQueryParams): QueryParams {
    const transformedQuery = {} as QueryParams;

    forEach(query, (queryValue, queryName) => {
      if (queryValue) {
        transformedQuery[queryName] = toString(queryValue);
      }
    });

    return transformedQuery;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  /**
   * Queries space-x launch api with query params
   */
  queryAll(query: SpaceXQueryParams = {}): Observable<SpaceXLaunch[]> {
    const compatibleQuery = this.transformToCompatibleQuery(query);

    return this.http.get<SpaceXLaunch[]>(this.baseUrl, { params: this.getParams(compatibleQuery) }).pipe(
      retry(3), // retry up to 3 times
      catchError(this.handleError) // handle the error
    );
  }
}
