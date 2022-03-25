import { QuestionReponseModel } from "./question-reponse-model copy";
import { SujetModel } from "./sujet-model";
import { UtilisateurModel } from "./utilisateur-model";

export interface ScoreModel {
    id:number;
    sujet:SujetModel;
    score:number;
    utilisateur: UtilisateurModel;
    questionReponses: Array<QuestionReponseModel>;
    scoreDate: string;
}
