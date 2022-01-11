import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from 'src/app/ctrl-gastos-service.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddgroupComponent implements OnInit {

  user='sin Nombre';
  
  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit(): void {
    this.user = this.cookie.get("NombreUser");  
  }

  aggGrupo(nom: string, desc: string){
    this.APIphp.CrearGrupo(nom,desc,this.user).subscribe(datos => {
      if(datos['resultado'] == 'Si') {        
        alert((datos['mesaje']));   
        this.ruteador.navigateByUrl('/grupos/grupos');  //se accede a principal   
      }else{
        alert((datos['mesaje']));
      }
    }
      );{
    }
  }
}
