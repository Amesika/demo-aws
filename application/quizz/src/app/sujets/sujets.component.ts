import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { SujetModel } from '../model/sujet-model';
import { SujetService } from '../service/sujet.service';
import { SujetFormComponent } from './sujet-form/sujet-form.component';


@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css']
})
export class SujetsComponent implements OnInit {

  @ViewChild('sujetform') sujetform!: SujetFormComponent;
  @ViewChild('contextMenu') tableContextMenu!: any;

  sujets!: SujetModel[];
  items!: MenuItem[];
  selectedSujet!: SujetModel;

  actions: MenuItem[] = [{
    label: 'Update',
    icon: 'pi pi-refresh',
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
  }
  ];


  constructor(
    private confirmationService: ConfirmationService,
    private sujetService: SujetService,
    public router: Router) { }

  ngOnInit() {
    this.sujetService.getSujets()
      .subscribe(sujets => this.sujets = sujets);

    this.items = [
      {
        label: 'Quizz',
        items: [{
          label: 'Commencer',
          icon: 'pi pi-play',
          command: ((even: any) => this.start())
        }]
      },
      {
        label: 'Options',
        items: [{
          label: 'Modifier',
          icon: 'pi pi-refresh',
          command: ((even: any) => this.open("Modifier un sujet", true, this.selectedSujet))
        },
        {
          label: 'Supprimer',
          icon: 'pi pi-times',
          command: ((even: any) => this.delete())
        }
        ]
      }
    ];
  }

  open(title: string, isUpdate: boolean, data?: SujetModel) {
    this.sujetform.dialogTitle = title;
    this.sujetform.isUpdate = isUpdate;
    this.sujetform.showPositionDialog('top')
    if (data)
      this.sujetform.setSusjet(data);

    console.log(data);
  }

  selectRow(event: any, sujet: SujetModel) {
    this.selectedSujet = sujet;
    this.tableContextMenu.toggle(event);
  }

  delete() {
    this.confirmationService.confirm({
      message: "Voulez vous supprimer le sujet ?",
      accept: () => {
        this.sujetService.deleteSujet(this.selectedSujet);
      }
    });
  }

  start(): void {
    this.router.navigate(['start'], { state: this.selectedSujet });
  }
}
