import { ReponseModel } from "./reponse-model";

export interface QuestionModel {
    id:number;
    titre:string;
    detail:string;
    reponses:Array<ReponseModel>;
    repdex:string;
}