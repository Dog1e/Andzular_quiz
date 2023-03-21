import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zwierze : {name:string, zwierz:boolean, correct:number}[] = [];
  roslina : {name:string, zwierz:boolean, correct:number}[] = [];

  recieveObject(object2:any)
  {
    if(object2.zwierz && object2.correct==1)
    {
      this.zwierze.push(object2);
    }
    else if(!object2.zwierz && object2.correct==0)
    {
      this.zwierze.push(object2);
    }
    else if(!object2.zwierz && object2.correct==1)
    {
      this.roslina.push(object2);
    }
    else if(object2.zwierz && object2.correct==0)
    {
      this.roslina.push(object2);
    }
  }
}

