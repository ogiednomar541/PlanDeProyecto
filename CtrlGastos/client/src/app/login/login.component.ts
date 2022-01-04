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
          
         // this.APIphp.setMyuser(user); //si si accede se modifica la variable global usuario          
          //console.log(user);

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