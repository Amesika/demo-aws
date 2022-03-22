import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SujetModel } from 'src/app/model/sujet-model';
import { ReponseModel } from 'src/app/model/reponse-model';
import { SujetModule } from 'src/app/sujet/sujet.module';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.css']
})
export class SujetFormComponent implements OnInit {

  @Input()
  dialogTitle!: string;
  displayPosition!: boolean;
  position!: string;

  sujetForm!: FormGroup;

  questionForm!: FormGroup;

  reponseForm!: FormGroup;

  sujet!: SujetModel;

  constructor(private fb: FormBuilder) {
    this.sujetForm = this.fb.group({
      titre: ['', Validators.required],
      questions: this.fb.array([])
    });
    this.questionForm = this.fb.group({
      titre: ['', Validators.required],
      detail: '',
      repdex: ['', Validators.required],
    });
    this.reponseForm = this.fb.group({
      titre: ['', Validators.required],
      repdex: ['', Validators.required],
    });
  }

  get questions() {
    return this.sujetForm.controls["questions"] as FormArray;
  }

  get reponses() {
    return this.sujetForm.controls["questions"] as FormArray;
  }


  ngOnInit(): void {
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  submitSujet() {
    console.log(this.sujetForm.value);
  }

  close() {
    this.displayPosition = false;
  }

  /** La gestions des questions */
  addQuestion() {
    const newQuestionForm = this.fb.group( this.questionForm.value);
    this.questionForm.reset();
    this.questions.push(newQuestionForm);
    console.log(this.questions.value)
  }

  updateQuestion(questionIndex: number) {
    this.questionForm = this.fb.group( this.questions.at(questionIndex).value);
    this.questionForm.controls['titre'].setValidators(Validators.required);
    this.questionForm.controls['repdex'].setValidators(Validators.required);
    this.questions.removeAt(questionIndex);   
  }

  deleteQuestion(questionIndex: number) {
    this.questions.removeAt(questionIndex);
  }

    /** La gestions des réponses */
    addReponse() {
      /*/const newReponseForm = this.fb.group( this.questionForm.value);
      this.questionForm.reset();
      this.questions.push(newReponseForm);
      console.log(this.questions.value)*/
    }
  
    updateReponse(questionIndex: number) {
      /*this.questionForm = this.fb.group( this.questions.at(questionIndex).value);
      this.questionForm.controls['titre'].setValidators(Validators.required);
      this.questionForm.controls['repdex'].setValidators(Validators.required);
      this.questions.removeAt(questionIndex); */  
    }
  
    deleteReponse(questionIndex: number) {
      //this.questions.removeAt(questionIndex);
    }

}
