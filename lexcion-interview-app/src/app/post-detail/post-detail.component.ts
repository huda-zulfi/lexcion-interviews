import { Component, DoCheck, OnInit } from '@angular/core';
import { InterviewDataService } from '../interview-data.service';

@Component({
  selector: 'lexi-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less'],
})
export class PostDetailComponent implements OnInit, DoCheck {
  interviewID = 0;
  consultantCompany = '';
  endClient = "";
  jobTitle = "";
  jobTech = "";
  constructor(private postdetail:InterviewDataService) {}

  ngOnInit(): void {
    console.log('ngonitinit', this.interviewID);
  }
  ngDoCheck() {
    console.log("interview obj", this.interviewObj);
  }
  interviewObj: any = {};

  submit() {
    this.interviewObj = {
      interviewId: this.interviewID,
      consultantCompany: this.consultantCompany,
      endClient: this.endClient,
      jobTitle: this.jobTitle,
      jobTech: this.jobTech,
    
    };
    this.postdetail.createInterview(this.interviewObj)
  }

}
