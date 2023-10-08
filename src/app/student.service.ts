import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { 

  }

  url = 'http://localhost:9002/api/demo';
  index = () => {
    return this._http.get<any>(`${this.url}/index`).pipe(map(res => {
        return res;
      }));
    }

  // store = (data:any) => {
  // return this._http.post<any>(`${this.url}/store`, data).pipe(map((res: any) => {
  //     return res;
  // }));

  store = (data:any) => {
  return this._http.post<any>(`${this.url}/store`, data).pipe(map((res: any) => {
      return res;
  }));
}

}
