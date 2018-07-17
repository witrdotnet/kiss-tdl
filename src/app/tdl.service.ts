import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { TdlItem } from './tdl-classes/tdlItem'

@Injectable()
export class TdlService {

  private apiurl: string = environment.trelloApi.url
                   + '/boards/' + environment.trelloApi.board + '/lists'
                   + '?key=' + environment.trelloApi.key
                   + '&token=' + environment.trelloApi.token;

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<TdlItem[]> {
    return this.http.get<TdlItem[]>(this.apiurl);
  }
}
