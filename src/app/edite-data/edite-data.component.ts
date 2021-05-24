import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-edite-data',
  templateUrl: './edite-data.component.html',
  styleUrls: ['./edite-data.component.css']
})
export class EditeDataComponent implements OnInit {

  data = {
    book_number: "",
    table_name: "",
  };
  allWardData: any = [];

  allFileData = {
    table_name: '', 
    id: 0,
    ward_number: '',
    paper_number: '',
    ward_date: '',
    paper_code: '',
    book_number: '',
    book_Date: '',
    paper_action: '',
    book_subject: '',
    ward_base: '',
  };
  constructor(private router: Router, private service: AddInfoServiceService) {

    var url: String = this.router.url;

    var urlData = url.split("/");
    var bookNumber = urlData[urlData.length - 1];
    var tableName = urlData[urlData.length - 2];
    this.allFileData.table_name=tableName;
    this.allFileData.id = parseInt(urlData[urlData.length - 3]) ;


    this.getBookNumber(bookNumber, tableName);


  }

  ngOnInit(): void {
  }

  Update() { 
    console.log(this.allFileData); 
    this.service.updateWardValue(this.allFileData).subscribe(s=>{
      console.log(s);
      if(s['sucess']==true){
        alert("تم التحديث بنجاح")
      }else{
        alert("حدث خطأ ما اثناء التحديث يرجى المحاولة مرة ثانية")
      }
    });

  }

  async getBookNumber(num, tableName) {

    console.log(num);
    console.log(tableName);

    this.data.book_number = num;
    this.data.table_name = tableName;

    await this.service.getWardBook(this.data).subscribe((s) => {
      this.allWardData = s;

      this.allFileData.ward_number = s[0]['book_num'];
      this.allFileData.paper_number = s[0]['paper_num'];
      this.allFileData.ward_date = s[0]['ward_date'];
      this.allFileData.paper_code = s[0]['paper_code'];
      this.allFileData.book_Date = s[0]['book_date'];
      this.allFileData.paper_action = s[0]['book_action'];
      this.allFileData.book_subject = s[0]['book_subjects'];
      this.allFileData.ward_base = s[0]['ward_base'];
      this.allFileData.book_number = s[0]['book_num'];

      console.log(s[0]['id']);

      console.log(s);
    });

  }

}
