import { Injectable } from '@angular/core';
import{Item} from "../Shared/item";
import{articles} from "../Shared/articles";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
item :Item;
  constructor() { }
  getItem(): Item {
    return this.item ;
  }
}
