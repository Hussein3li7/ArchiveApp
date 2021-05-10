import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-all-sader-data',
  templateUrl: './all-sader-data.component.html',
  styleUrls: ['./all-sader-data.component.css']
})
export class AllSaderDataComponent implements OnInit {

  allData: any = [];
  allPrivateData: any = [];
  showloading: boolean = false;

  constructor(private service: AddInfoServiceService, private router: Router) {
    service.user.subscribe((s) => {
      if (s == null || s == undefined) {
        this.router.navigate(['/login'])
      }
    });

    this.getData();
    this.getPrivateData();
  }

  ngOnInit(): void {
  }

  async getData() {
    this.showloading = true;
    await this.service.getAllSaderData().subscribe((s) => {
      console.log(s);
      this.allData = s;
      if (this.allData.length > 0) {
        this.showloading = false;
      }
    });
  }
  async getPrivateData() {
    this.showloading = true;

    await this.service.getAllPrivateSaderData().subscribe((s) => {
      console.log(s);
      this.allPrivateData = s; if (this.allPrivateData.length > 0) {
        this.showloading = false;
      }
    });
  }
}
