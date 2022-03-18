import { Injectable } from '@angular/core';
import { SujetModel } from '../model/sujet-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http: HttpClient) { }

  getSujets() {
    return this.http.get<SujetModel[]>('assets/tmp/sujets.json');
  }
}
