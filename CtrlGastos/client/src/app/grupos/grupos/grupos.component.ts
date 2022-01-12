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

  //eliminar un gasto
  EliminarGGpo(grupo: string){    
    console.log(grupo);  
    console.log(this.user); 
    if(this.user == '' || grupo == ""){
      alert("Error No hay usuario o grupo seleccionado");
    }else{    
      this.APIphp.EliminarGastoGpo(grupo, this.user).subscribe(datos =>{
        if(datos['resultado'] === 'OK') {        
          alert("Deuda pagada");
          this.ruteador.navigateByUrl('/principal');
        }else{
          alert("Error al pagar");
        }
      });
    
    }
  }

  abonar(grupo:string, cantidad:string){
    if(cantidad == "" || grupo == ""){
      alert("Error no agrego la cantidad a abonar!...");
    }else{    
      console.log(grupo);
      console.log(cantidad);
      console.log(this.user);
      this.APIphp.Abonar(grupo, this.user, cantidad).subscribe(datos =>{
        if((datos["resultado"] == "Abono")) { 
          alert("Se abono de manera exitosa!..");                  
          this.persgpo(grupo);
        }else if((datos["resultado"] == "Pago")){
          alert("Se pago completamente");
        }else{
          alert((datos["resultado"]));
        }
      });
    }
  }
}
