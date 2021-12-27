import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterviewDataService {
  data: any[] = [
    {
      interviewId: 1,
      cosultantCompany: 'OlympiaCG',
      endClient: 'citi',
      jobTitle: 'Sr. Developer',
      jobTech: ['node', 'angular'],
      levelInterview: 'two',
      date: new Date(),
      recuriterName: 'asd',
      recuriterEmail: 'asdfdf',
    },
    {
      interviewId: 2,
      cosultantCompany: 'Zulifqar',
      endClient: 'citi',
      jobTitle: 'Sr. Developer',
      jobTech: ['node', 'angular'],
      levelInterview: 'two',
      date: new Date(),
      recuriterName: 'asd',
      recuriterEmail: 'asdfdf',
    },
    {
      interviewId: 3,
      cosultantCompany: 'Malik',
      endClient: 'citi',
      jobTitle: 'Sr. Developer',
      jobTech: ['node', 'angular'],
      levelInterview: 'two',
      date: new Date(),
      recuriterName: 'asd',
      recuriterEmail: 'asdfdf',
    },
  ];
  constructor(private http: HttpClient) {}

  getData() {
    try {
      let param: any = { huda: 2 };
      const dataResp = this.http.get('http://localhost:3000/interviews', {
        params: param,
      });
      console.log('data response from backend: ', dataResp);
      return dataResp;
    } catch (error) {
      console.log('error ', error);
      return 'serve is down';
    }
  }

  getOneData(id: number):Observable<any> {
    try {
      let params: any = { interviewId: id };
      const response = this.http.get('http://localhost:3000/getInterviewById', {
        params: params,
      });
      return response;
    } catch (error) {
      console.log('error ', error);
      return of('serve is down again') ;
    }
  }
}
