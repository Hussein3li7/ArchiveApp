import { Component, OnInit } from '@angular/core';
import { AddInfoServiceService } from '../service/add-info-service.service';
@Component({
  selector: 'app-add-new-file',
  templateUrl: './add-new-file.component.html',
  styleUrls: ['./add-new-file.component.css']
})
export class AddNewFileComponent implements OnInit {
  constructor(private service: AddInfoServiceService) { }

  ngOnInit(): void {
  }

  ward_number: string;
  paper_number: string;
  ward_date: string;
  paper_code: string;
  book_number: string;
  book_Date: string;
  paper_action: string;
  book_subject: string;
  ward_base: string;
  fileUrl: string;
  fileType: string;

  allFileData = {
    ward_number: "",
    paper_number: "",
    ward_date: "",
    paper_code: "",
    book_number: "",
    book_Date: "",
    paper_action: "",
    book_subject: "",
    ward_base: "",
    fileUrl: "",
  };


  upluadFile(file: any) {
    console.log(file.target.value);
  }
  wardNumber(data) {
    this.ward_number = data;
  }
  paperNumber(data) {

    this.paper_number = data;
  }
  wardDate(data) {

    this.ward_date = data;
  }
  paperCode(data) {

    this.paper_code = data;
  }
  bookNumber(data) {

    this.book_number = data;
  }
  bookDate(data) {

    this.book_Date = data;
  }
  paperAction(data) {

    this.paper_action = data;
  }
  bookSubject(data) {

    this.book_subject = data;
  }
  wardBase(data) {

    this.ward_base = data;
  }
  getFileType(fileType) {
    this.fileType = fileType;
  }
  async submitAllValue() {
    this.allFileData.ward_number = this.ward_number;
    this.allFileData.paper_number = this.paper_number;
    this.allFileData.ward_date = this.ward_date;
    this.allFileData.paper_code = this.paper_code;
    this.allFileData.book_number = this.book_number;
    this.allFileData.book_Date = this.book_Date;
    this.allFileData.paper_action = this.paper_action;
    this.allFileData.book_subject = this.book_subject;
    this.allFileData.ward_base = this.ward_base;
    this.allFileData.fileUrl = "Url File";
    console.log(this.allFileData);

    if (this.fileType == "publicWard") {
      (await this.service.addNewFileToArchive(this.allFileData)).subscribe(s => {
        console.log(s);
        console.log(s['sucess']);
        if (s['sucess'] == true) {
          window.alert("تم اضافة الملف الى الوارد العام بنجاح");

        } else {
          window.alert("خطأ يرجى التاكد من جميع الحقول");
        }

      });
    } else if (this.fileType == "privteWard") {
      (await this.service.addNewPublicWardFileToArchive(this.allFileData)).subscribe(s => {
        console.log(s);
        console.log(s['sucess']);
        if (s['sucess'] == true) {
          window.alert("تم اضافة الملف الى الوارد السري بنجاح");
        } else {
          window.alert("خطأ يرجى التاكد من جميع الحقول");
        }
      });
    } else {
      window.alert("خطأ ");
    }

  }



}
