import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddInfoServiceService {

  constructor(private http: HttpClient) { }


  addNewFileToArchive(data) {
    return this.http.post('http://localhost/ArchiveDB/AddData/UpluadArchiveFile.php', data);
  }
  addNewPublicWardFileToArchive(data) {
    return this.http.post('http://localhost/ArchiveDB/AddData/UpluadPrivatePublicArchiveFile.php', data);
  }
  addNewFileToSader(data) {
    return this.http.post('http://localhost/ArchiveDB/AddData/UpluadSadierArchiveFile.php', data);

  }
  addNewFileToPrivateSader(data) {
    return this.http.post('http://localhost/ArchiveDB/AddData/UpluadSadierPrivateArchiveFile.php', data);

  }

  getAllWardData() {
    return this.http.get("http://localhost/ArchiveDB/ShowData/showAllPublicWard.php");
  }
  getAllPrivateWardData() {
    return this.http.get("http://localhost/ArchiveDB/ShowData/showAllPrivateWard.php");
  }
  getAllSaderData() {
    return this.http.get("http://localhost/ArchiveDB/ShowData/showAllPublicSader.php");
  }
  getAllPrivateSaderData() {
    return this.http.get("http://localhost/ArchiveDB/ShowData/showAllPrivateSader.php");
  }

}
