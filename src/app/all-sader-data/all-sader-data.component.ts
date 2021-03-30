import { Component, OnInit } from '@angular/core';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-all-sader-data',
  templateUrl: './all-sader-data.component.html',
  styleUrls: ['./all-sader-data.component.css']
})
export class AllSaderDataComponent implements OnInit {

  allData:any = [];
  allPrivateData:any = [];

  constructor(private service: AddInfoServiceService) {
    this.getData();
    this.getPrivateData();
  }

  ngOnInit(): void {
  }

  async getData() { 
    await this.service.getAllSaderData().subscribe((s) => {
      console.log(s);
      this.allData = s;
    }); 
  }
  async getPrivateData() { 
    await this.service.getAllPrivateSaderData().subscribe((s) => {
      console.log(s);
      this.allPrivateData = s;
    }); 
  } 
}