import { Injectable } from '@angular/core';

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
  constructor() {}

  getData() {
    return this.data;
  }

  getOneData(id: number) {
    const reqInt = this.data.find((d) => d.interviewId === id);
    return reqInt;
  }
}
