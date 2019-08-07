import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeNor from '@angular/common/locales/nb';
import localeNorExtra from '@angular/common/locales/nb';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from "src/app/products/product-list.component";
import { WelcomeComponent } from "src/app/home/welcome.component";
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from "src/app/products/product-detail.guard";

registerLocaleData(localeNor, 'no', localeNorExtra);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'no'}
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ] },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full',
      { path: '**',  redirectTo:'welcome', pathMatch: 'full' }
    ]),
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    library.add(fab, far, fas);
  }


 }
