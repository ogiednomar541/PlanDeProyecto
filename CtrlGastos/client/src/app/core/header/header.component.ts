import { Component, OnInit, ViewChild } from '@angular/core';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  NombreUser = 'sin nombre';
  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit(){
    this.NombreUser = this.cookie.get("NombreUser");  
    console.log(this.NombreUser);

    //se ejecuta la creacion de la grafica
    //this.ngAfterViewInit();
  }

  Esadmin(){
    if (this.NombreUser == "AdminAdmin"){
        return true;   
    }else{
      return false;   
    }
  }   
}
