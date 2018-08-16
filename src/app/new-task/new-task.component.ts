import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brewery: string, price: string, AC: string, level: string, pint: string) {
    let newKeg: Keg = new Keg(name, brewery, parseInt(price), parseInt(AC), parseInt(level), parseInt(pint));
    this.sendKeg.emit(newKeg);
  }
}
