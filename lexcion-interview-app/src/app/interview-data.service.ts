import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterviewDataService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getInterviews() {
    try {
      let param: any = { huda: 2 };
      const dataResp = this.http.get(this.baseUrl + 'interviews', {
        params: param,
      });
      console.log('data response from backend: ', dataResp);
      return dataResp;
    } catch (error) {
      console.log('error ', error);
      return 'serve is down';
    }
  }

  getInterviewById(id: number): Observable<any> {
    try {
      const response = this.http.get(this.baseUrl + 'interviews/' + id);
      return response;
    } catch (error) {
      console.log('error ', error);
      return of('serve is down again');
    }
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  createInterview(interviewInfo: any) {
    const resp = this.http.post(this.baseUrl + 'interviews', interviewInfo, {
      headers: this.headers,
    });

    console.log('Response from backend create API', resp);

    // resp.subscribe((data) => {
    //   if (data) {
    //     console.log('Data returned from BE', data);
    //     // mouse over -> ServerResponse.success: boolean
    //     //this.flashMessage.show('Registration successful', { cssClass: 'alert-success', timeout: 3200 });
    //   } else {
    //     console.error('something went wrong');
    //     //this.flashMessage.show('Registration failed', { cssClass: 'alert-danger', timeout: 3200 });
    //   }
    // });
  }
}
