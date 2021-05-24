import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AddInfoServiceService } from '../service/add-info-service.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sadir',
  templateUrl: './sadir.component.html',
  styleUrls: ['./sadir.component.css']
})
export class SadirComponent implements OnInit {

  constructor(private service: AddInfoServiceService, private storage: AngularFireStorage) { }

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

  uploadPercent: Observable<number>;
  downloadURL: any;
  file: any;

  getFile(event) {
    this.file = event;

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
  upluadFile() {
    const file = this.file.target.files[0];

    const filePath = this.fileType + '/' + file['name'];
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(async () => {
        this.downloadURL = await fileRef.getDownloadURL().toPromise();
        this.allFileData.fileUrl = this.downloadURL;
        this.submitAllValue();
      })
    )
      .subscribe()
  }
  async submitAllValue() {
    this.allFileData.sadir_number = this.sadir_number;
    this.allFileData.sadir_date = this.sadir_date;
    this.allFileData.paper_code = this.paper_code;
    this.allFileData.notes = this.notes;
    this.allFileData.sadir_subject = this.sadir_subject;
    this.allFileData.sadir_base = this.sadir_base;

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
