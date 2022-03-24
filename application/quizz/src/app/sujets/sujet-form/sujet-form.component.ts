import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SujetModel } from 'src/app/model/sujet-model';
import { ReponseModel } from 'src/app/model/reponse-model';
import { SujetModule } from 'src/app/sujet/sujet.module';
import { SujetService } from 'src/app/service/sujet.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.css']
})
export class SujetFormComponent implements OnInit {

  @Input()
  public dialogTitle!: string;
  displayPosition!: boolean;
  position!: string;

  sujetForm!: FormGroup;

  questionForm!: FormGroup;

  reponseForm!: FormGroup;

  sujet!: SujetModel;

  constructor(private fb: FormBuilder, private sujetSvr:SujetService,private messageService: MessageService) {
    this.sujetForm = this.fb.group({
      titre: ['', Validators.required],
      questions: this.fb.array([], [Validators.required,Validators.minLength(1) ])
    });
    this.questionForm = this.fb.group({
      titre: ['', Validators.required],
      detail: '',
      repdex: ['', Validators.required],
      reponses: this.fb.array([], [Validators.required,Validators.minLength(2)])
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
    return this.questionForm.controls["reponses"] as FormArray;
  }


  ngOnInit(): void {
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  submitSujet() {
    let sujet = this.sujetForm.value as SujetModel;
    this.sujetSvr.createSujet(sujet);
    this.displayPosition = false;
    
  }

  close() {
    this.displayPosition = false;
  }

  /** La gestions des questions */
  addQuestion() {
    if (this.questionForm.valid) {
      const newQuestionForm = this.fb.group(this.questionForm.value);
      newQuestionForm.controls["reponses"].setValue (this.reponses.value);  
      this.questions.push(newQuestionForm);      
      this.questionForm.reset();
      this.reponses.clear();
    }
  }

  updateQuestion(questionIndex: number) {
    let reponses = this.questions.at(questionIndex).value.reponses
    this.questionForm = this.fb.group(this.questions.at(questionIndex).value);
    this.questionForm.removeControl('reponses'); 
    this.questionForm.setControl('reponses', this.fb.array(reponses, [Validators.required,Validators.minLength(2)]));
    this.questionForm.controls['titre'].setValidators(Validators.required);
    this.questionForm.controls['repdex'].setValidators(Validators.required);
    this.questions.removeAt(questionIndex);
  }

  deleteQuestion(questionIndex: number) {
    this.questions.removeAt(questionIndex);
  }

  /** La gestions des réponses */
  addReponse() {
    if (this.reponseForm.valid) {
    const newReponseForm = this.fb.group(this.reponseForm.value);
    this.reponseForm.reset();
    this.reponses.push(newReponseForm);
    }
  }

  updateReponse(reponseIndex: number) {
    this.reponseForm = this.fb.group(this.reponses.at(reponseIndex).value);
    this.reponseForm.controls['titre'].setValidators(Validators.required);
    this.reponseForm.controls['repdex'].setValidators(Validators.required);
    this.reponses.removeAt(reponseIndex);
  }

  deleteReponse(reponseIndex: number) {
    this.reponses.removeAt(reponseIndex);
  }

}
