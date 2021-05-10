import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddInfoServiceService {

  user: Observable<firebase.default.User>;

  constructor(private http: HttpClient, private auth: AngularFireAuth) {
    this.user = auth.user;

  }

  urlData = {
    local: "http://localhost/ArchiveDB",
    db: "ArchiveDB",
  }

  addNewFileToArchive(data) {
    return this.http.post(this.urlData.db + '/AddData/UpluadArchiveFile.php', data);
  }
  addNewPublicWardFileToArchive(data) {
    return this.http.post(this.urlData.db + '/AddData/UpluadPrivatePublicArchiveFile.php', data);
  }
  addNewFileToSader(data) {
    return this.http.post(this.urlData.db + '/AddData/UpluadSadierArchiveFile.php', data);

  }
  addNewFileToPrivateSader(data) {
    return this.http.post(this.urlData.db + '/AddData/UpluadSadierPrivateArchiveFile.php', data);

  }

  getAllWardData() {
    return this.http.get(this.urlData.db + "/ShowData/showAllPublicWard.php");
  }
  getAllPrivateWardData() {
    return this.http.get(this.urlData.db + "/ShowData/showAllPrivateWard.php");
  }
  getAllSaderData() {
    return this.http.get(this.urlData.db + "/ShowData/showAllPublicSader.php");
  }
  getAllPrivateSaderData() {
    return this.http.get(this.urlData.db + "/ShowData/showAllPrivateSader.php");
  }

  getWardBook(data) {
    return this.http.post(this.urlData.db + "/ShowData/Show_ward_book.php", data);
  }
  getSaderBook(data) {
    return this.http.post(this.urlData.db + "/ShowData/Show_sader_book.php", data);
  }



}
