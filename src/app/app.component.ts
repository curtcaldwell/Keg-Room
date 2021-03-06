import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Bipedal Swagger Bar';
  kegs: Keg[] = [
    new Keg('African Amber', 'MacnJack', 250, 6, 1, 124),
    new Keg('Rainier', 'RBC', 200, 5, 2, 80),
    new Keg('Kitty cat blues', 'Black Raven', 250, 6, 3, 30),
    new Keg('Bodhizafa', 'Georgetown', 260, 7, 1, 124)
  ];
  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEdit(){
    this.selectedKeg = null;
  }
  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }
  buyPint(clickedKeg: Keg){
    clickedKeg.pint--;
    if (clickedKeg.pint > 80) {
      clickedKeg.level = 1;
    } else if (clickedKeg.pint < 40) {
      clickedKeg.level = 3;
    } else {
      clickedKeg.level = 2
    }
  }
}
