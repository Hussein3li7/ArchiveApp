import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-edite-sader-data',
  templateUrl: './edite-sader-data.component.html',
  styleUrls: ['./edite-sader-data.component.css']
})
export class EditeSaderDataComponent implements OnInit {

  data = {
    book_number: "",
    table_name: "",
  };
  allSaderData: any = [];


  allFileData = {
    sadir_number: " "
    , sadir_date: ""
    , paper_code: ""
    , notes: ""
    , sadir_subject: ""
    , sadir_base: "",
    table_name: "",
    id: 0,
  };

  constructor(private router: Router, private service: AddInfoServiceService) {


    var url: String = this.router.url;

    var urlData = url.split("/");
    var id = urlData[urlData.length - 1];
    var tableName = urlData[urlData.length - 2];
    this.allFileData.table_name = tableName;
    this.allFileData.id = parseInt(urlData[urlData.length - 3]);
    this.getBookNumber(id, tableName);


  }

  ngOnInit(): void {
  }

  Update() {
    console.log(this.allFileData);
    this.service.updateSaderValue(this.allFileData).subscribe(s => {
      console.log(s); if (s['sucess'] == true) {
        alert("تم التحديث بنجاح")
      } else {
        alert("حدث خطأ ما اثناء التحديث يرجى المحاولة مرة ثانية")
      }
    });
  }

  async getBookNumber(num, tableName) {

    console.log(num);
    console.log(tableName);

    this.data.book_number = num;
    this.data.table_name = tableName;

    await this.service.getSaderBook(this.data).subscribe((s) => {

      this.allFileData.sadir_number = s[0]['sader_number'];
      this.allFileData.sadir_date = s[0]['sader_date'];
      this.allFileData.paper_code = s[0]['sader_code'];
      this.allFileData.notes = s[0]['sader_notes'];
      this.allFileData.sadir_subject = s[0]['sader_subjects'];
      this.allFileData.sadir_base = s[0]['sader_base'];

      this.allSaderData = s;
      console.log(s);
    });

  }

}
