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
    TucuentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
