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

  FormularioDeRegistro: FormGroup;
  
  constructor(public formulario: FormBuilder,
    private APIphp: CtrlGastosServiceService,
    private ruteador: Router
    ) { 
      this.FormularioDeRegistro = this.formulario.group({
        Nombre: [''],
        Email: [''],
        FechaNac: [''],
        Usuario: [''],
        Contra: [''],
        ConfContra: ['']
      });
    }

  ngOnInit(): void {
  }

  Registrar(): any {
    // console.log("Me presionaste ");
    console.log(this.FormularioDeRegistro.value);
    this.APIphp.RegistrarUsuario(this.FormularioDeRegistro.value).subscribe(respuesta => {
      console.log(respuesta);
      this.ruteador.navigateByUrl('/login');
    });


  }

}
