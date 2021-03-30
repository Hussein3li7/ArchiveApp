import { Component, OnInit } from '@angular/core';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-sadir',
  templateUrl: './sadir.component.html',
  styleUrls: ['./sadir.component.css']
})
export class SadirComponent implements OnInit {

  constructor(private service: AddInfoServiceService) { }

  ngOnInit(): void {
  }

  sadir_number: string;
  sadir_date: string;
  paper_code: string;
  notes: string;
  sadir_subject: string;
  sadir_base: string;
  fileUrl: string;


  fileType: string;

  allFileData = {
    sadir_number: " "
    , sadir_date: ""
    , paper_code: ""
    , notes: ""
    , sadir_subject: ""
    , sadir_base: ""
    , fileUrl: ""
  };


  upluadFile(file: any) {
    console.log(file.target.value);
  }
  sadirNumber(data) {
    this.sadir_number = data;
  }

  sadirDate(data) {

    this.sadir_date = data;
  }
  paperCode(data) {
    this.paper_code = data;
  }

  paperAction(data) {

    this.notes = data;
  }
  bookSubject(data) {

    this.sadir_subject = data;
  }
  sadirBase(data) {

    this.sadir_base = data;
  }
  getFileType(fileType) {
    this.fileType = fileType;
  }

  async submitAllValue() {
    this.allFileData.sadir_number = this.sadir_number;
    this.allFileData.sadir_date = this.sadir_date;
    this.allFileData.paper_code = this.paper_code;
    this.allFileData.notes = this.notes;
    this.allFileData.sadir_subject = this.sadir_subject;
    this.allFileData.sadir_base = this.sadir_base;
    this.allFileData.fileUrl = "Url File";
    console.log(this.allFileData);

    if (this.fileType == "publicSader") {
      (await this.service.addNewFileToSader(this.allFileData)).subscribe(s => {
        console.log(s);
        console.log(s['sucess']);
        if (s['sucess'] == true) {
          window.alert("تم اضافة الملف الى الصادر العام بنجاح");
          this.clear();
        } else {
          window.alert("خطأ يرجى التاكد من جميع الحقول");
        }

      });
    } else if (this.fileType == "privteSader") {
      (await this.service.addNewFileToPrivateSader(this.allFileData)).subscribe(s => {
        console.log(s);
        console.log(s['sucess']);
        if (s['sucess'] == true) {
          this.clear();
          window.alert("تم اضافة الملف الى الصادر السري بنجاح");
        } else {
          window.alert("خطأ يرجى التاكد من جميع الحقول");
        }
      });
    } else {
      window.alert("خطأ ");
    }
  }
  clear() {
    this.allFileData.sadir_number = "";
    this.allFileData.sadir_date = "";
    this.allFileData.paper_code = "";
    this.allFileData.notes = "";
    this.allFileData.sadir_subject = "";
    this.allFileData.sadir_base = "";
    this.allFileData.fileUrl = "";
  }
}
