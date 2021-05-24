
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AddNewFileComponent } from "./add-new-file/add-new-file.component";
import { MainPageComponent } from './main-page/main-page.component';
import { SearchOnFileComponent } from './search-on-file/search-on-file.component';
import { SadirComponent } from './sadir/sadir.component';
import { AllWardDataComponent } from './all-ward-data/all-ward-data.component';
import { AllSaderDataComponent } from './all-sader-data/all-sader-data.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { EditeDataComponent } from './edite-data/edite-data.component';
import { EditeSaderDataComponent } from './edite-sader-data/edite-sader-data.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'Main', component: MainPageComponent, canActivate: [AuthGuardService] },
    { path: 'AddNewFile', component: AddNewFileComponent, canActivate: [AuthGuardService] },
    { path: 'Sadir', component: SadirComponent, canActivate: [AuthGuardService] },
    { path: 'Search', component: SearchOnFileComponent, canActivate: [AuthGuardService] },
    { path: 'AllWard', component: AllWardDataComponent, canActivate: [AuthGuardService] },
    { path: 'AllSader', component: AllSaderDataComponent, canActivate: [AuthGuardService] },
    { path: 'EditeWardFIle/:id/:id/:id', component: EditeDataComponent, canActivate: [AuthGuardService] },
    { path: 'EditeSaderFIle/:id/:id/:id', component: EditeSaderDataComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },

]

@NgModule({

    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule,], 

})
export class router {


}

