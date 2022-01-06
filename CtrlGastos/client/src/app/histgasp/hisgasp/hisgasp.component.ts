import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hisgasp',
  templateUrl: './hisgasp.component.html',
  styleUrls: ['./hisgasp.component.scss']
})
export class HisgaspComponent implements OnInit {

  titulo = 'Historial De Gastos Personales Del Usuario: ';
  gasto: any ;
  Gastos = '';  
  NombreUser = 'sin nombre';

  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit() {
    this.NombreUser = this.cookie.get("NombreUser");  
    console.log(this.NombreUser);

    this.MostrarTodos();
  }
  
  //ver si hay registros  
  hayRegistros(){         
    return true;       
  }
  MostrarTodos() {           
    this.APIphp.MostrarHistGasp(this.NombreUser).subscribe(result =>{
      this.gasto = result});    
  }


}
