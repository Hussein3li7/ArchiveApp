import { Component, OnInit } from '@angular/core';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-search-on-file',
  templateUrl: './search-on-file.component.html',
  styleUrls: ['./search-on-file.component.css']
})
export class SearchOnFileComponent implements OnInit {

  ShowWardType: boolean = false;
  ShowSaderType: boolean = false;

  tableType: string;

  showWard() {
    this.ShowWardType = true;
    this.ShowSaderType = false;
  }
  showSader() {
    this.ShowSaderType = true;
    this.ShowWardType = false;
  }

  gettableType(fileType) {
    this.tableType = fileType;
    console.log(this.tableType);

  }

  allWardData: any = [];
  allSaderData: any = [];

  data = {
    book_number: '',
    table_name: '',
  }

  constructor(private service: AddInfoServiceService) { }

  ngOnInit(): void {
  }

  async search() {
    console.log(this.data);
    
    if (this.ShowWardType == true && this.ShowSaderType == false) {
      await this.service.getBook(this.data).subscribe((s) => {
        console.log("ward Data");

        this.allWardData = s;
        console.log(s);
      });
    } else if (this.ShowWardType == false && this.ShowSaderType == true) {
      console.log("sader Data");

      await this.service.getBook(this.data).subscribe((s) => {
        this.allSaderData = s;
        console.log(s);
      });
    }
  }


  async getBookNumber(num) {
    this.data.book_number = num;
    this.data.table_name = this.tableType;
    console.log(this.data);
    if (this.ShowWardType == true && this.ShowSaderType == false) {
      await this.service.getBook(this.data).subscribe((s) => {
        console.log("ward Data");

        this.allWardData = s;
        console.log(s);
      });
    } else if (this.ShowWardType == false && this.ShowSaderType == true) {
      console.log("sader Data");

      await this.service.getBook(this.data).subscribe((s) => {
        this.allSaderData = s;
        console.log(s);
      });
    }
  }


}
