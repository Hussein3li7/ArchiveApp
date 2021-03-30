
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AddNewFileComponent } from "./add-new-file/add-new-file.component";
import { MainPageComponent } from './main-page/main-page.component';
import { SearchOnFileComponent } from './search-on-file/search-on-file.component';
import { SadirComponent } from './sadir/sadir.component';
import { AllWardDataComponent } from './all-ward-data/all-ward-data.component';
import { AllSaderDataComponent } from './all-sader-data/all-sader-data.component';

const routes: Routes = [
    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Main', component: MainPageComponent },
    { path: 'AddNewFile', component: AddNewFileComponent },
    { path: 'Sadir', component: SadirComponent },
    { path: 'Search', component: SearchOnFileComponent },
    { path: 'AllWard', component: AllWardDataComponent },
    { path: 'AllSader', component: AllSaderDataComponent },

]

@NgModule({

    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],

})
export class router {


}

