import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MENUS } from 'src/app/constants/menu-constant';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MegaMenuItem[];

  ngOnInit() {
    this.items = MENUS;
  }
}