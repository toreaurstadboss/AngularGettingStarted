import { Component } from "@angular/core";

@Component(
  {
    selector: 'pm-root',
    template: `
    <div>
    <pm-products></pm-products>
    </div>`
  })
export class AppComponent {
  pageTitle = 'Acme Product Management';

}
