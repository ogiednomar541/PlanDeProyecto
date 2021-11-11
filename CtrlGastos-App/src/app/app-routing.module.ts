import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component';
import { AddgastosComponent } from './gastos/addgastos/addgastos.component';
import { GruposComponent } from './grupos/grupos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'tucuenta', component: TucuentaComponent},
  {path: 'gastos/addgastos', component: AddgastosComponent},
  {path: 'grupos', component: GruposComponent},
  { path: '', pathMatch: 'full', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
