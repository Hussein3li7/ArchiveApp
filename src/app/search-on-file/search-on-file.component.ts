import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  deleteItemData = {
    id: "",
  }

  data = {
    book_number: '',
    table_name: '',
  }

  constructor(private service: AddInfoServiceService, private router: Router) { }

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

  DeleteItem(id) {

    this.deleteItemData.id = id;

    if (confirm("هل انت متاكد من الحذف")) {

      if (this.ShowWardType == true && this.ShowSaderType == false) {
        console.log("Ward");
        if (this.tableType == "add_new_file_db") {
          console.log("public ward");

          this.service.deletePuplicWardItem(this.deleteItemData).subscribe(s => {
            console.log(s);

            if (s['sucess'] == true) {
              this.showAlert("تم حذف الكتاب")
              this.search();


            } else {
              this.showAlert("خطا الكتاب لم يحذف")
            }

          });

          // publihc ward data
        } else if (this.tableType == "add_new_ward_private_file_db") {
          //Private ward Data
          this.service.deletePrivateWardItem(this.deleteItemData).subscribe(s => {
            console.log(s);

            if (s['sucess'] == true) {
              this.showAlert("تم حذف الكتاب")
              this.search();

            } else {
              this.showAlert("خطا الكتاب لم يحذف")
            }

          });
          console.log("Private ward");
        }

      } else if (this.ShowWardType == false && this.ShowSaderType == true) {
        console.log("Sader");
        if (this.tableType == "add_sader_tb") {
          console.log("public sader");
          this.service.deletePuplicSaderItem(this.deleteItemData).subscribe(s => {
            console.log(s);

            if (s['sucess'] == true) {
              this.showAlert("تم حذف الكتاب")
              this.search();

            } else {
              this.showAlert("خطا الكتاب لم يحذف")
            }

          });
          //public sader
        } else if (this.tableType == "add_privet_sader_tb") {
          console.log("private sader");
          this.service.deletePrivateSaderItem(this.deleteItemData).subscribe(s => {
            console.log(s);

            if (s['sucess'] == true) {
              this.showAlert("تم حذف الكتاب")
              this.search();

            } else {
              this.showAlert("خطا الكتاب لم يحذف")
            }

          });
          //Private sader data 
        }
      }
    }

  }

  EditeBook(id, bookNumber) {

    if (this.ShowWardType == true && this.ShowSaderType == false) {
      //edite ward Book 
      this.router.navigate(['/EditeWardFIle/' + id + "/" + this.tableType + "/" + bookNumber]);

    } else {
      //edite Sader Book 
      this.router.navigate(['/EditeSaderFIle/' + id + "/" + this.tableType + "/" + bookNumber]);
    }

  }

  showAlert(msg: String) {
    alert(msg);
  }

}
