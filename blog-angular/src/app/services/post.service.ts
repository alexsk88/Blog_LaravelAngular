import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlglobal } from './apiglobal';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url = urlglobal.url;

  constructor(private _http: HttpClient)
  {

  }

  create(token, post): Observable<any>
  {
    let json = JSON.stringify(post);
    let params = "json="+json;
                                        
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('Authorization', token);
                                        
    
    return this._http.post(this.url + 'post', params, {headers});
  }
}
