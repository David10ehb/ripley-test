import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/datamenu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public listMenu: any = (data as any).default;;

  constructor() {
  }

  ngOnInit(): void {
  }

}
