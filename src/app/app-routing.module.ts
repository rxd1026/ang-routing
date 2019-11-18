import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Pg1Component } from './pg1/pg1.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
{path: '',
 redirectTo: '/home',
 pathMatch: 'full'
},
{path: 'page1', component: Pg1Component},
{path: '**', component: NotFoundComponent}
];
 
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
