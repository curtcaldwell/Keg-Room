import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Tap Shack';
  kegs: Keg[] = [
    new Keg('African Amber', 'MacnJack', 250, 6, 1),
    new Keg('Rainier', 'RBC', 200, 5, 2),
    new Keg('Kitty cat blues', 'Black Raven', 250, 6, 3),
    new Keg('Bodhizafa', 'Georgetown', 260, 7, 1)
  ];
  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEdit(){
    this.selectedKeg = null;
  }

}
