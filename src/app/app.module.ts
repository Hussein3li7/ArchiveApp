import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddNewFileComponent } from './add-new-file/add-new-file.component';
import { MainPageComponent } from './main-page/main-page.component';
import { router } from './routing.module';
import { AddInfoServiceService } from './service/add-info-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchOnFileComponent } from './search-on-file/search-on-file.component';
import { SadirComponent } from './sadir/sadir.component';
import { AllWardDataComponent } from './all-ward-data/all-ward-data.component';
import { AllSaderDataComponent } from './all-sader-data/all-sader-data.component'

import { AngularFireModule } from '@angular/fire'; 
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AddNewFileComponent, MainPageComponent, SearchOnFileComponent, SadirComponent, AllWardDataComponent, AllSaderDataComponent, LoginComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    router,
    MaterialModule,
    HttpClientModule

  ],
  providers: [AddInfoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
