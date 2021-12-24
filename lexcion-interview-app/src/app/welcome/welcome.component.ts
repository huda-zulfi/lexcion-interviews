import { Component, OnInit } from '@angular/core';
import { InterviewDataService } from '../interview-data.service';

@Component({
  selector: 'lexi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  path = '/details';
  data: any ;
  constructor(private interviewData: InterviewDataService) { }
  


  ngOnInit(): void {
     this.data = this.interviewData.getData();
  }
}
