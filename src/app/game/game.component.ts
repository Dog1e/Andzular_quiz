import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
    quiz = [
      {
        name: "słoń",
        zwierz: true,
        correct: -1
      },
      {
        name: "eukaliptus",
        zwierz: false,
        correct: -1
      },
      {
        name: "wiewiórka",
        zwierz: true,
        correct: -1
      },
      {
        name: "kapibara",
        zwierz: true,
        correct: -1
      },
      {
        name: "palma",
        zwierz: false,
        correct: -1
      },
    ]

    @Output() item = new EventEmitter<any>();

    lockButtons=false;
    index = 0;
    quizObject = this.quiz[this.index].name;

    zwierzeCheck()
    {
      if(this.lockButtons==false)
      {
        if(this.quiz[this.index].zwierz==true)
        {
          this.quiz[this.index].correct=1
        }
        else
        {
          this.quiz[this.index].correct=0
        }

        if(this.index==this.quiz.length-1)
        {
          this.lockButtons=true
          this.item.emit(this.quiz[this.index])
        }
        else
        {
          this.item.emit(this.quiz[this.index])
        }
      }

      if(this.lockButtons==false)
      {
        this.index++;
        this.quizObject = this.quiz[this.index].name
      }  
    }

    roslinaCheck()
    {
      if(this.lockButtons==false)
      {
        if(this.quiz[this.index].zwierz==false)
        {
          this.quiz[this.index].correct=1
        }
        else
        {
          this.quiz[this.index].correct=0
        }

        if(this.index==this.quiz.length-1)
        {
          this.lockButtons=true
          this.item.emit(this.quiz[this.index])
        }
        else
        {
          this.item.emit(this.quiz[this.index])
        }
      }

      if(this.lockButtons==false)
      {
        this.index++;
        this.quizObject = this.quiz[this.index].name
      }
    }
}
