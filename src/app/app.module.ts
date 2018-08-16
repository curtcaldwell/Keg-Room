import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { KegPatronComponent } from './keg-patron/keg-patron.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    NewTaskComponent,
    KegPatronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
