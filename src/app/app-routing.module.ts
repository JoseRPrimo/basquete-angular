import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LojaComponent } from './loja/loja.component';


const routes: Routes = [ 
  {path: 'login', component:LoginComponent},
  {path: 'loja', component:LojaComponent},
  {path: '', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
