import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Get_Voucher(): Observable<any>  {
    return this.http.get<any>('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher');
  }
  Put_Voucher(id:any,data:any):Observable<any> {
    return this.http.put<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`,data);
  }
  Post_Voucher(data: any): Observable<any>  {
    return this.http.post<any>('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher',data);
  }
  Get_Voucher_based_ID(id:any) {
    return this.http.get<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`);
  }

}
