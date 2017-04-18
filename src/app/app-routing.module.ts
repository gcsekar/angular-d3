import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Example01Component } from './components/example-01/example-01.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent},                  
    { path: "example1", component: Example01Component},
    { path: "**", redirectTo: '' }
];

@NgModule( {
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    
    
}
