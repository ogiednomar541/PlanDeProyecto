import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';
import {Router} from '@angular/router';

//import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  

  constructor(private APIphp: CtrlGastosServiceService, private ruteador:Router) { }

  ngOnInit(): void {
  }
  
  ingresar(user: string, password: string){
    
    console.log(user + password);
    this.ruteador.navigateByUrl('/principal');
    /*

    this.APIphp.checkUser(user,password).subscribe(datos => {
      if((datos['resultado'] == 'SiAccede')) {        
        this.ruteador.navigateByUrl('/principal');
      }else{
        console.log("--no se pudo acceder");
      }
    });    */

  }

}