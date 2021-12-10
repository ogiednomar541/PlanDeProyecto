import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfriendComponent } from './friends/addfriend/addfriend.component';
import { AddgastosComponent } from './gastos/addgastos/addgastos.component';
import { LiquidarComponent } from './gastos/liquidar/liquidar.component';
import { RecientesComponent } from './gastos/recientes/recientes.component';
import { TodosComponent } from './gastos/todos/todos.component';
import { AddgroupComponent } from './grupos/addgroup/addgroup.component';
import { GroupdetailComponent } from './grupos/groupdetail/groupdetail.component';
import { GruposComponent } from './grupos/grupos/grupos.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SignupComponent } from './signup/signup.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component'
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'tucuenta', component: TucuentaComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'gastos/addgastos', component: AddgastosComponent},
  {path: 'friends/addfriend', component: AddfriendComponent},
  {path: 'grupos/grupos', component: GruposComponent},
  {path: 'grupos/addgroup', component: AddgroupComponent},
  {path: 'grupos/groupdetail', component: GroupdetailComponent},
  {path: 'gastos/recientes', component: RecientesComponent},
  {path: 'gastos/todos', component: TodosComponent},
  {path: 'gastos/liquidar', component: LiquidarComponent},
  {path: '', pathMatch: 'full', redirectTo:'welcome'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
