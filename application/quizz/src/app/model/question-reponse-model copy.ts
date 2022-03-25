import { QuestionStrModel } from "./question-str-model";
import { ReponseModel } from "./reponse-model";

export interface QuestionReponseModel {
    id:number;
    question:QuestionStrModel;
    reponse:ReponseModel;
}