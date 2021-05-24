import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AddInfoServiceService } from './add-info-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  UserEmail: string;
  displayName: string;
  profileImgUrl: string;
  UID: string;
  constructor(private authService: AddInfoServiceService, private router: Router) {

  }
  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.user.pipe(map(
      user => {
        if (user) {
          this.UserEmail = user.email;
          this.UID = user.uid;
          this.displayName = user.displayName;
          this.profileImgUrl = user.photoURL;

          return true
        }
        else {
          this.router.navigate(['/login'], { queryParams: { URL: state.url } })
          return false
        }
      }
    ))
  }
}
