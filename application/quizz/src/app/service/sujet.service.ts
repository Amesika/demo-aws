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

  createSujet(sujet:SujetModel){
     console.log(sujet);
     this.messageService.add({severity:"success", summary: "Créationd d'un sujet", detail: JSON.stringify(sujet)});
  }

}
