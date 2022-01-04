import { Component, OnInit } from '@angular/core';
import { InterviewDataService } from '../interview-data.service';

@Component({
  selector: 'lexi-edit-interview',
  templateUrl: './edit-interview.component.html',
  styleUrls: ['./edit-interview.component.less'],
})
export class EditInterviewComponent implements OnInit {
  constructor(private interviewData: InterviewDataService) {}

  ngOnInit(): void {}
}
