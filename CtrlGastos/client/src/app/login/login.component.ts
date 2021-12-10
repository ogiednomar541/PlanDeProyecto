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
    
    console.log(user);
    console.log(password);
    //this.ruteador.navigateByUrl('/principal');    
    this.APIphp.checkUser(user,password).subscribe(datos => {
      console.log(datos);

      if(user == "" || password == ""){
        alert("No deje espacios en blanco");
        this.ruteador.navigateByUrl('/login');
      }else{
        if((datos['resultado'] == 'SiAccede')) {        
          this.ruteador.navigateByUrl('/principal');  
          //aqui una varibale igualada al parametro 'user' que llega a la funcion
          //la variable que sea global oque se pueda leer desde otro componente  
        }else if((datos['resultado'] == 'Erorr')||(datos['resultado'] == 'NoAccede')){
          console.log("--no se pudo acceder");
          alert((datos['mesaje']));
          this.ruteador.navigateByUrl('/login');
        }
      }                  
    });   

  }

}