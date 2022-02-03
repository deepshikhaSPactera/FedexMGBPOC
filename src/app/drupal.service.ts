import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrupalService {
  private urltest:any
  constructor ( private http: HttpClient) {}

    getDrupal() {
       
      this.urltest = 'https://mgbdev.bfmdev1.com/api/post/?include=image&jsonapi_include=1' ;
        return this.http.get(this.urltest);
    }
}
