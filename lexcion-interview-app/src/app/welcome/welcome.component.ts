import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lexi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  path="/details"
  data: any = [
    {
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

  ngOnInit(): void {}
}
