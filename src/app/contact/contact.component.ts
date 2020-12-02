import { Component, OnInit } from '@angular/core';
import {Item} from "../Shared/item";
import {articles} from "../Shared/articles";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
articles: Item[];
  constructor() { }

  ngOnInit(): void {
    this.articles=articles;
  }

}
