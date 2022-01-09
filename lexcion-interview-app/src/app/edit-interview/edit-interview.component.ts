import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewDataService } from '../interview-data.service';

@Component({
  selector: 'lexi-edit-interview',
  templateUrl: './edit-interview.component.html',
  styleUrls: ['./edit-interview.component.less'],
})
export class EditInterviewComponent implements OnInit, DoCheck {
  unit: any = undefined;
  consulComp = '';
  eClient = '';
  jTitle = '';
  jTech = '';
  lInterview = '';
  day = '';
  recName = '';
  recEmail = '';
  constructor(
    private interviewData: InterviewDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const idStr = param['id'];
      const idNum = parseInt(idStr);
      this.fetchInterviewById(idNum);
    });
  }

  ngDoCheck(): void {
    if (this.unit) {
      this.unit.consultantCompany = this.consulComp;
      this.unit.endClient = this.eClient;
      this.unit.jobTitle = this.jTitle;
      this.unit.jobTech = this.jTech;
      this.unit.levelInterview = this.lInterview;
      this.unit.date = this.day;
      this.unit.recuriterName = this.recName;
      this.unit.recuriterEmail = this.recEmail;
    }
  }

  fetchInterviewById(id: any) {
    const retort = this.interviewData.getInterviewById(id);
    retort.subscribe((data) => {
      console.log('Data after afdsdgfsdfaer:: ', data);
      // orignal data from service/backend
      this.unit = data;
      //new variable gets equals to data and old name

      this.consulComp = data.consultantCompany;
      this.eClient = data.endClient;
      this.jTitle = data.jobTitle;
      this.jTech = data.jobTech;
      this.lInterview = data.levelInterview;
      this.day = data.date;
      this.recName = data.recuriterName;
      this.recEmail = data.recuriterEmail;
    });
  }
}
