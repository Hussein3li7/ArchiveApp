import { Component, OnInit } from '@angular/core';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-all-ward-data',
  templateUrl: './all-ward-data.component.html',
  styleUrls: ['./all-ward-data.component.css']
})
export class AllWardDataComponent implements OnInit {

  allData:any = [];
  allPrivateData:any = [];

  constructor(private service: AddInfoServiceService) {
    this.getData();
    this.getPrivateData();
  }

  ngOnInit(): void {
  }

  async getData() { 
    await this.service.getAllWardData().subscribe((s) => {
      console.log(s);
      this.allData = s;
    }); 
  }
  async getPrivateData() { 
    await this.service.getAllPrivateWardData().subscribe((s) => {
      console.log(s);
      this.allPrivateData = s;
    }); 
  } 
}
