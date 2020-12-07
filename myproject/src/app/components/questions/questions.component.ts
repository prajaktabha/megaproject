import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/questions.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  question: Questions = {
    questions: '',
    option1: '',
    option2: '',
    option3:'',
    option4:'',
    answer:'',
    quizid:'',
    typeid:''
  };

  submitted = false;

  constructor(private questionservice:QuestionsService) { }

  ngOnInit() {
  }

  saveTutorial(): void {
    const data = {
      questions: this.question.questions,
      option1: this.question.option1,
      option2: this.question.option2,
      option3: this.question.option3,
      option4: this.question.option4,
      answer: this.question.answer,
      quizid:this.question.quizid,
      typeid:this.question.typeid
    };

    this.questionservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.question = {
    questions: '',
    option1: '',
    option2: '',
    option3:'',
    option4:'',
    answer:'',
    quizid:'',
    typeid:''

    };
  }
}
