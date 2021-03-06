import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//el header y el footer
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PrincipalModule } from './principal/principal.module';
import { TucuentaModule } from './tucuenta/tucuenta.module';
import { GastosModule} from './gastos/gastos.module';
import { LoginModule } from './login/login.module';
import { RegistrarModule } from './registrar/registrar.module';
import { ClarityModule } from '@clr/angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PrincipalModule,
    TucuentaModule,
    GastosModule,
    LoginModule,
    RegistrarModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
