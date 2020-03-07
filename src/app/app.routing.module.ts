import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: AppComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}