import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from "src/app/shared/star.component";
import { FormsModule } from "@angular/forms";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
   StarComponent,
   CommonModule,
   FormsModule,
   FontAwesomeModule,
  ]
})
export class SharedModule {

  constructor () {
    library.add(fab, far, fas);
  }

}
