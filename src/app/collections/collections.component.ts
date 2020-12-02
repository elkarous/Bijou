import { Component, OnInit } from '@angular/core';
import {Item} from "../Shared/item";
import {articles} from "../Shared/articles";
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  articles: Item[];
  constructor() { }

  ngOnInit(): void {
    this.articles=articles;
  }


}
