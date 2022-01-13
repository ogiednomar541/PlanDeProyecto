import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    
  constructor(private APIphp: CtrlGastosServiceService,private ruteador: Router) {}

  ngOnInit(): void {
  }
  
  enviarDatos(nom: string, email: string, fechaex:string, user:string, pas: string, cpas:string) {           
    // console.log("Me presionaste ");        
    this.APIphp.RegistrarUsuario(nom,email,fechaex,user,pas,cpas).subscribe( datos => {            
      //console.log(datos);
      //this.ruteador.navigateByUrl('/login');
      if((datos['resultado'] == 'No')) {                
        alert(datos['mesaje']);
        this.ruteador.navigateByUrl('/signup');
      }else{
        alert(datos['mesaje']);        
        this.ruteador.navigateByUrl('/login');        
      }      
    });    
  }

}
