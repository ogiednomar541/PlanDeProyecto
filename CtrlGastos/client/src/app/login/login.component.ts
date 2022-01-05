import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

//import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  
  
  constructor(private APIphp: CtrlGastosServiceService, private ruteador:Router, private cookie: CookieService) { }
  NombreUser:any;

  ngOnInit(): void {
  }
  
  ingresar(user: string, password: string){
    
    //console.log(user);
    //console.log(password);
    //this.ruteador.navigateByUrl('/principal');    
    this.APIphp.checkUser(user,password).subscribe(datos => {
      //console.log(datos);
      if(user == "" || password == ""){
        alert("No deje espacios en blanco");
        this.ruteador.navigateByUrl('/login');
      }else{
        if((datos['resultado'] == 'SiAccede')) {        
                   
          //se crea la cookie del usuario que se necesitara en todos lados
          this.cookie.set("NombreUser", user);
          this.NombreUser = this.cookie.get("NombreUser");
          //console.log(this.NombreUser);
          this.ruteador.navigateByUrl('/principal');  //se accede a principal
          
        }else if((datos['resultado'] == 'Erorr')||(datos['resultado'] == 'NoAccede')){
          console.log("--no se pudo acceder");
          alert((datos['mesaje']));
          this.ruteador.navigateByUrl('/login');
        }
      }                  
    });   

  }

}