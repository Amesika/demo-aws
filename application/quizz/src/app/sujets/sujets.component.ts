import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SujetModel } from '../model/sujet-model';
import { SujetService } from '../service/sujet.service';


@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css']
})
export class SujetsComponent implements OnInit {

  sujets!: SujetModel[];
  items!: MenuItem[];

  actions: MenuItem[] = [{
    label: 'Update',
    icon: 'pi pi-refresh',
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
  }
  ];


  constructor(private sujetService: SujetService) { }

  ngOnInit() {
    this.sujetService.getSujets()
      .subscribe(sujets => this.sujets = sujets);

    this.items = [
      {
        label: 'Quizz',
        items: [{
          label: 'Commencer',
          icon: 'pi pi-play',
          routerLink: '/start'
        }]
      },
      {
        label: 'Options',
        items: [{
          label: 'Modifier',
          icon: 'pi pi-refresh',

        },
        {
          label: 'Supprimer',
          icon: 'pi pi-times',
        }
        ]
      }
    ];
  }

}
