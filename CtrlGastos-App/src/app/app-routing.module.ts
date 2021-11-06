import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component'

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'tucuenta', component: TucuentaComponent},
  { path: '', pathMatch: 'full', redirectTo:'principal'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
