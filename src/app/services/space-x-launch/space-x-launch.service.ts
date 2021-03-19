import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forEach, toString } from 'lodash-es';
import { environment } from '../../../environments/environment';
import { QueryParams, constructQueryParams } from 'src/app/helpers';
import spaceX from './space-x.types';

export type SpaceXQueryParams = { launch_success?: boolean, land_success?: boolean, launch_year?: number };

@Injectable({
  providedIn: 'root',
})
export class SpaceXLaunchService {
  private baseUrl = environment.spaceXLaunchApiBaseUrl;
  private defaultQueryParams = { limit: 100 };

  constructor(private http: HttpClient) {}

  private getParams(queryParams: QueryParams = {}) {
    const finalQueryParams = Object.assign({}, this.defaultQueryParams, queryParams);

    return constructQueryParams(finalQueryParams);
  }

  private transformToCompatibleQuery(query: SpaceXQueryParams) {
    const transformedQuery = {} as QueryParams;

    forEach(query, (queryValue, queryName) => {
      if (queryValue) {
        transformedQuery[queryName] = toString(queryValue);
      }
    });

    return transformedQuery;
  }

  queryAll(query: SpaceXQueryParams = {}) {
    const compatibleQuery = this.transformToCompatibleQuery(query);

    return this.http.get<spaceX.Launch>(this.baseUrl, { params: this.getParams(compatibleQuery) });
  }
}
