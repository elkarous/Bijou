import { Component, OnInit } from '@angular/core';
import {Item} from "../Shared/item";
import {articles} from "../Shared/articles";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
articles: Item[];

  constructor() { }

  ngOnInit(): void {
    this.articles=articles;

  }
  

}
