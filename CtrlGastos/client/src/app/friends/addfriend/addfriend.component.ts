import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from 'src/app/ctrl-gastos-service.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.scss']
})
export class AddfriendComponent implements OnInit {
  user='sin Nombre';
  Grupos: any;
  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit(): void {
    this.user = this.cookie.get("NombreUser");
    this.APIphp.MostrarGrupos(this.user).subscribe(datos => {
      this.Grupos=datos;
    });
  }

  addAgpo(grupo:string, nomuser:string, cantidad:string){
    this.APIphp.AñadirAGpo(grupo, nomuser, cantidad).subscribe(datos => {
      if(datos['resultado'] == 'Si') {        
        alert((datos['mesaje']));   
        this.ruteador.navigateByUrl('/grupos/grupos');  //se accede a principal   
      }else{
        alert((datos['mesaje']));
      }
    });
  }
  
}
