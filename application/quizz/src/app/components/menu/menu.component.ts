import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MENUS, USER_MENUS } from 'src/app/constants/menu-constant';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
  userMenu!: MenuItem[];

  ngOnInit() {
    this.items = MENUS;
    this.userMenu = USER_MENUS;
  }
}
