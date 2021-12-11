import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formularioDeUsuario: FormGroup;
  
  constructor(public formulario: FormBuilder,
    private APIphp: CtrlGastosServiceService,
    private ruteador: Router
    ) { 
      this.formularioDeUsuario = this.formulario.group({
        nombre: [''],
        email: [''],
        fechanac: [''],
        usuario: [''],
        contra: [''],
        confcontra: ['']
      });
    }

  ngOnInit(): void {
  }

  
  enviarDatos(): any {
    // console.log("Me presionaste ");
    console.log(this.formularioDeUsuario.value);        
    this.APIphp.RegistrarUsuario(this.formularioDeUsuario.value).subscribe( datos => {            
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
