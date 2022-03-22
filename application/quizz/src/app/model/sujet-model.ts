import { QuestionModel } from "./question-model";

export interface SujetModel {
    id:number;
    titre:String;
    questions: QuestionModel;
}
