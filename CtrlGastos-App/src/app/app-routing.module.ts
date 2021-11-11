import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component';
import { AddgastosComponent } from './gastos/addgastos/addgastos.component';
import { GruposComponent } from './grupos/grupos.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'tucuenta', component: TucuentaComponent},
  {path: 'gastos/addgastos', component: AddgastosComponent},
  {path: 'grupos', component: GruposComponent},
  { path: '', pathMatch: 'full', redirectTo:'principal'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
