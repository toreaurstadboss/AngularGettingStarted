import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Pipe } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'ProductDetailGuard'
})
export class ProductDetailGuard implements CanActivate {

constructor(private router: Router) {

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.url[1].path;
    if (isNaN(id) || id<1) {
      alert("Invalid product id");
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
