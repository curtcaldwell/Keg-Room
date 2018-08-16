import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-patron',
  templateUrl: './keg-patron.component.html',
  styleUrls: ['./keg-patron.component.css']
})
export class KegPatronComponent {
  @Input() childKegList: Keg[];
  @Output() clickedBuy = new EventEmitter();

  buyButtonClicked(currentKeg: Keg) {
    this.clickedBuy.emit(currentKeg);
  }
}
