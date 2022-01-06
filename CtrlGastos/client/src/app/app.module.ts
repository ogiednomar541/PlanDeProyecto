import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//el header y el footer
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
//import { PrincipalModule } from './principal/principal.module';
//import { TucuentaModule } from './tucuenta/tucuenta.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importar componentes
import { SignupComponent } from './signup/signup.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddgroupComponent } from './grupos/addgroup/addgroup.component';
import { GroupdetailComponent } from './grupos/groupdetail/groupdetail.component';
import { GruposComponent } from './grupos/grupos/grupos.component';
import { AddgastosComponent } from './gastos/addgastos/addgastos.component';
import { LiquidarComponent } from './gastos/liquidar/liquidar.component';
import { RecientesComponent } from './gastos/recientes/recientes.component';
import { TodosComponent } from './gastos/todos/todos.component';
import { AddfriendComponent } from './friends/addfriend/addfriend.component';
import { GastoinComponent } from './gastosind/gastoin/gastoin.component';
//import { CtrlGastosServiceService } from './ctrl-gastos-service.service';
import {CookieService} from 'ngx-cookie-service';
import { HisgaspComponent } from './histgasp/hisgasp/hisgasp.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PrincipalComponent,
    LoginComponent,
    TucuentaComponent,
    WelcomeComponent,
    AddgroupComponent,
    GroupdetailComponent,
    GruposComponent,
    AddgastosComponent,
    LiquidarComponent,
    RecientesComponent,
    TodosComponent,
    AddfriendComponent,
    GastoinComponent,
    HisgaspComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
//    PrincipalModule,
//    TucuentaModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
