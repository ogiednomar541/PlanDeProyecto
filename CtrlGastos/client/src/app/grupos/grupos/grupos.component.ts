import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from 'src/app/ctrl-gastos-service.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  user='sin Nombre';
  Grupos: any;
  Grupos2: any;
  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit(): void {
    this.user = this.cookie.get("NombreUser");
    this.APIphp.MostrarGrupos(this.user).subscribe(datos => {
      this.Grupos=datos;
    });
  }

  persgpo(grupos:string){
    this.APIphp.MostrarInGpo(grupos).subscribe(datos => {
      this.Grupos2=datos;
    });
  }
}
