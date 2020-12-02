import { Component, Input, OnInit } from '@angular/core';
import {Item} from "../Shared/item";
@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  articles: Item[];
  @Input() item : Item;
  constructor() { }

  ngOnInit(): void {
  
  }

}
