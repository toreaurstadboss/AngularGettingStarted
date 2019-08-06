import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNor from '@angular/common/locales/nb';
import localeNorExtra from '@angular/common/locales/nb';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from "src/app/products/product-list.component";
import { WelcomeComponent } from "src/app/home/welcome.component";
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
registerLocaleData(localeNor, 'no', localeNorExtra);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'no'}
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
