import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  priorityColor(currentKeg)
  {
    switch(currentKeg.level)
    {
      case 2:
      return "bg-warning";
      case 3:
      return "bg-danger";
      default:
      return "bg-success";
    }
  }
}
