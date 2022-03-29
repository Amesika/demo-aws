import { Injectable } from '@angular/core';
import { SujetModel } from '../model/sujet-model';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http: HttpClient,private messageService: MessageService) { }

  getSujets() {
    return this.http.get<SujetModel[]>('assets/tmp/sujets.json');
  }

  getSujet(id:number) {
    return this.http.get<SujetModel>('assets/tmp/sujet.json');
  }

  createSujet(sujet:SujetModel){
     this.messageService.add({severity:"success", summary: "Création d'un sujet", detail: JSON.stringify(sujet.titre)});
  }

  updateSujet(sujet:SujetModel){
    this.messageService.add({severity:"success", summary: "Modification d'un sujet", detail: JSON.stringify(sujet.titre)});
 }
  
  deleteSujet(sujet:SujetModel){
    this.messageService.add({severity:"success", summary: "Supprimer un sujet", detail: JSON.stringify(sujet.titre)});
  }

}
