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
  showloading: boolean = false;
  bookNumber: number;

  tableType: string;
  noData: String = "";
  wardOrSader: string = "";
  privateOrPublich: string = "";

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
    console.log(this.ShowWardType);
    console.log(this.ShowSaderType);

    if (this.ShowSaderType == false && this.ShowWardType == false) {
      this.wardOrSader = "يرجى تحديد نوع الكتاب صادر ام وارد";

    } else {
      this.showloading = true;
      console.log(this.data.book_number);
      this.wardOrSader = "";

      this.data.table_name = this.tableType;
      console.log(this.data);
      if (this.ShowWardType == true && this.ShowSaderType == false) {
        await this.service.getWardBook(this.data).subscribe((s) => {
          console.log("ward Data");
          this.allWardData = s;
          if (this.allWardData.length < 1) {
            this.noData = "لا توجد بيانات";
            this.showloading = false;
          } else {
            this.noData = "";
            this.showloading = false;

          }
          console.log(this.allWardData.length);
        });
      } else if (this.ShowWardType == false && this.ShowSaderType == true) {
        console.log("sader Data");

        await this.service.getSaderBook(this.data).subscribe((s) => {
          this.allSaderData = s;
          if (this.allSaderData.length < 1) {
            this.noData = "لا توجد بيانات"; this.showloading = false;
          } else {
            this.noData = ""; this.showloading = false;
          }
          console.log(this.allSaderData.length);
        });
      }
    }


  }


  async getBookNumber(num) {
    this.data.book_number = num;
    this.data.table_name = this.tableType;
    console.log(this.data);
    if (this.ShowWardType == true && this.ShowSaderType == false) {
      await this.service.getWardBook(this.data).subscribe((s) => {
        console.log("ward Data");

        this.allWardData = s;
        console.log(s);
      });
    } else if (this.ShowWardType == false && this.ShowSaderType == true) {
      console.log("sader Data");

      await this.service.getSaderBook(this.data).subscribe((s) => {
        this.allSaderData = s;
        console.log(s);
      });
    }
  }


}
