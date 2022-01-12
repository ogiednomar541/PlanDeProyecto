import { Component, OnInit, ViewChild } from '@angular/core';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  
  NombreUser = 'sin nombre';
  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit(){
    this.NombreUser = this.cookie.get("NombreUser");  
    console.log(this.NombreUser);

    if (this.NombreUser != "AdminAdmin"){
      //obtener si tiene datos pendientes
      this.Consulgastpend(this.NombreUser)    
    }    
  }

  Consulgastpend( user: string){
      this.APIphp.ConsulVenci(user).subscribe(datos =>{        
        if((datos['resultado'] > 0)) {                  
          alert(" Hola Usuario Tienes unos gastos vencidos o por vencer ojo con eso deberias revisarlos..");          
        }
      });                

  }

  Esadmin(){
    if (this.NombreUser == "AdminAdmin"){
        return true;   
    }else{
      return false;   
    }
  }   
}
