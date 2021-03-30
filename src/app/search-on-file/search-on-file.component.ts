import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-on-file',
  templateUrl: './search-on-file.component.html',
  styleUrls: ['./search-on-file.component.css']
})
export class SearchOnFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitAllValue(){
    console.log("Searching");
    
  }

  getBookNumber(num){
    console.log(num);
    
  }

}
