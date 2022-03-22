import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.css']
})
export class SujetFormComponent implements OnInit {

  @Input()
  dialogTitle!:string;
  
  displayPosition!: boolean;
  position!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}

}
