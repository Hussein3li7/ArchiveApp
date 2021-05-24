import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddInfoServiceService } from '../service/add-info-service.service';

@Component({
  selector: 'app-all-ward-data',
  templateUrl: './all-ward-data.component.html',
  styleUrls: ['./all-ward-data.component.css']
})
export class AllWardDataComponent implements OnInit {

  allData: any = [];
  allPrivateData: any = [];
  deleteDataInfo = {
    id: '',
  }
  showloading: boolean = false;
  constructor(private service: AddInfoServiceService, private router: Router) {
    service.user.subscribe((s) => {
      if (s == null || s == undefined) {
        this.router.navigate(['/login'])
      }
    });

    this.getData();
    this.getPrivateData();
  }

  ngOnInit(): void {
  }

  async getData() {
    this.showloading = true;
    await this.service.getAllWardData().subscribe((s) => {
      console.log(s);
      this.allData = s;
      if (this.allData.length > 0) {
        this.showloading = false;
      }
    });
  }
  async getPrivateData() {
    this.showloading = true;
    await this.service.getAllPrivateWardData().subscribe((s) => {
      console.log(s);
      this.allPrivateData = s;
      if (this.allPrivateData.length > 0) {
        this.showloading = false;
      }
    });
  }
  DeletePublicItem(id) {
    this.deleteDataInfo.id = id;
    console.log(id);
    console.log(this.deleteDataInfo);
    if (confirm("هل انت متاكد من حذف الكتاب")) {

      this.service.deletePuplicWardItem(this.deleteDataInfo).subscribe(s => {

        console.log(s);
        if (s['sucess'] == true) {
          alert("تم حذف الكتاب");
          this.getData();
        } else {
          alert("حدث خطا اثناء حذف الكتاب");

        }


      });

    }

  }
  DeletePrivateItem(id) {
    this.deleteDataInfo.id = id;
    console.log(id);
    console.log(this.deleteDataInfo);
    if (confirm("هل انت متاكد من حذف الكتاب")) {

      this.service.deletePuplicWardItem(this.deleteDataInfo).subscribe(s => {

        console.log(s);
        if (s['sucess'] == true) {
          alert("تم حذف الكتاب");
          this.getPrivateData();

        } else {
          alert("حدث خطا اثناء حذف الكتاب");

        }


      });

    }

  }
}
