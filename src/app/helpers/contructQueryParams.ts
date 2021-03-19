import { HttpParams } from '@angular/common/http';

export type QueryParams = { [param: string]: string | string[] };

/**
 * It accepts query params object and returns HttpParams instance
 */
export function constructQueryParams(queryParams: QueryParams): HttpParams {
  const params = new HttpParams();
  return params.appendAll(queryParams);
}
