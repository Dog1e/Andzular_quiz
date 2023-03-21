import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  @Input() zwierze : {name:string, zwierz:boolean, correct:number}[] = [];
  @Input() roslina : {name:string, zwierz:boolean, correct:number}[] = [];
}
