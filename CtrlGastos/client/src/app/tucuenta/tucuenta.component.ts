import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';

@Component({
  selector: 'app-tucuenta',
  templateUrl: './tucuenta.component.html',
  styleUrls: ['./tucuenta.component.scss']
})

export class TucuentaComponent implements OnInit {

  //@Input() NombreUser: string  = 'sin nombre';
  NombreUser='sin Nombre';

//varibles para mostrar los datos
nombre: string | undefined;
email: string | undefined;
password: string | undefined;
fechanac: string | undefined;

  constructor( private APIphp: CtrlGastosServiceService, private ruteador:Router, private cookie: CookieService) { }

  ngOnInit(): void {        
    this.NombreUser = this.cookie.get("NombreUser");    
    //console.log(this.NombreUser);
    this.obtenerinfo(this.NombreUser);        
  }  

  //metodo de obtener informacion del usuario
  obtenerinfo(user: string,){           
    this.APIphp.obtenerCuenta(user).subscribe(datos => {      
      if(user == "" ){
        alert("Error no se loggeo primero");
        this.ruteador.navigateByUrl('/login');
      }else{
        if((datos['resultado'] == 'SiAccede')) {                  
          alert((datos['mesaje']));
          console.log(datos);
          //aqui van los datos que se cargaran a los imputs
           this.nombre = datos['nombre'];
           this.email = datos['email'];
           this.password = datos['pasword'];
           this.fechanac = datos['fechanac'];          

        }else if((datos['resultado'] == 'Erorr')||(datos['resultado'] == 'NoAccede')){
          console.log("Error...");
          alert((datos['mesaje']));
          this.ruteador.navigateByUrl('/login');
        }
      }                  
    });   

  }

  cambiarclave(user:string, pas: string){
    console.log(user);
    console.log(pas);
    this.APIphp.cambiarClave(user, pas).subscribe(datos => {    
      if((datos['resultado'] == 'SiAccede')) {                  
        alert((datos['mesaje']));
        console.log(datos);
        this.ruteador.navigateByUrl('/tucuenta');        
        
      }else if((datos['resultado'] == 'Error')){
        console.log("Error...");
        alert((datos['mesaje']));
        this.ruteador.navigateByUrl('/tucuenta');
      }
    });   
  }

}

