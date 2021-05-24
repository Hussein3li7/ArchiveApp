import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  userEmail: String;
  user: Observable<firebase.default.User>
  constructor(private auth: AngularFireAuth, private service: AddInfoServiceService, private routr: Router) {

    service.user.subscribe((s) => {
      if (s != null || s != undefined) {

        this.userEmail = s.email;
      }
    });
  }

  ngOnInit(): void {
  }
  clickMethod(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
    logout() {
    if (confirm("هل انت متاكد من تسجيل الخروج")) {
      this.auth.signOut().then(s => { 
        this.routr.navigate(['/login'])
      });
    }else{

    }

  }


}
