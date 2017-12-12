import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('../../assets/data/data.json');
  }
}
