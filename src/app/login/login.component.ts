import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  showLogin: boolean = true;
  showReg: boolean = false



  loginInfo = {
    email: '',
    pass: ''
  }

  registerInfo = {
    name: '',
    email: '',
    pass: ''
  }
  Dialog: boolean = false
  resetEmail: ''

  showloading: boolean = false

  UnsubscribeUser: string = ''
  worngPass: string = ''
  netWorkErr: string = ''
  disabledUser: string = ''
  netWorkErrRegister: string = ''
  emptyFiled: boolean = false;
  emptyFiled2: boolean = false;
  shortPass: boolean = false;
  constructor(private auth: AngularFireAuth, private router: Router, private service: AddInfoServiceService) {
 

  }

  ngOnInit() {
  }

  getEmail(s) {
    this.loginInfo.email = s;
  }
  getPass(s) {
    this.loginInfo.pass = s;
  }

  login() {
    this.showloading = true;
    this.auth.signInWithEmailAndPassword(this.loginInfo.email, this.loginInfo.pass).then((s) => {
      this.router.navigate(['/Main'])
    }).catch((e) => {
      alert(e);
      this.showloading = false;
    });
  }


}
