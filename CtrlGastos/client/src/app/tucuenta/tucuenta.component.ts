import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';

@Component({
  selector: 'app-tucuenta',
  templateUrl: './tucuenta.component.html',
  styleUrls: ['./tucuenta.component.scss']
})
export class TucuentaComponent implements OnInit {

  usuario = "saulo";

  constructor( private APIphp: CtrlGastosServiceService, private ruteador:Router) { }

  ngOnInit(): void {
    this.obtenerinfo(this.usuario);    
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
          //datos['nombre'] 
          //datos['email']
          //datos['pasword']
          //datos['fechanac']          
        }else if((datos['resultado'] == 'Erorr')||(datos['resultado'] == 'NoAccede')){
          console.log("Error...");
          alert((datos['mesaje']));
          this.ruteador.navigateByUrl('/login');
        }
      }                  
    });   

  }

}

