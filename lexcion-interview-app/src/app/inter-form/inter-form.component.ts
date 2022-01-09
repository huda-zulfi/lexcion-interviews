import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewDataService } from '../interview-data.service';
import { Hero } from './hero';

@Component({
  selector: 'lexi-inter-form',
  templateUrl: './inter-form.component.html',
  styleUrls: ['./inter-form.component.less'],
})
export class InterFormComponent implements OnInit {
  model: any;
  constructor(
    private InterviewDataService: InterviewDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const idStr = param['id'];
      const idNum = parseInt(idStr);
      this.obtainData(idNum);
    });
  }

  obtainData(id: any) {
    const figuers = this.InterviewDataService.getInterviewById(id);
    figuers.subscribe((data) => {
      console.log('Data after afdsdgfsdfaer:: ', data);

      this.model = new Hero(
        data.interviewId,
        data.consultantCompany,
        data.endClient,
        data.jobTitle,
        data.jobTech,
        data.levelInterview,
        data.recuriterName,
        data.recuriterEmail
      );
    });
  }

  submitted = false;

  onSubmit() {
    this.submitted = !this.submitted;
    this.InterviewDataService.createInterview(this.model)

  }

  // newHero() {
  //   this.model = new Hero(42, '', '');
  // }
}
