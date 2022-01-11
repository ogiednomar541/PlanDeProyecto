import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gestuser',
  templateUrl: './gestuser.component.html',
  styleUrls: ['./gestuser.component.scss']
})
export class GestuserComponent implements OnInit {

  titulo = 'Gestion de Usuarios Administrador : ';
  usuario: any ;
  Usuario = '';  
  NombreUser = 'sin nombre';
  
  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router ){}

  ngOnInit() {
    this.NombreUser = this.cookie.get("NombreUser");  
    console.log(this.NombreUser);
    //metodo para mostrar todos
    this.MostrarTodos();
  }

  //ver si hay registros  
  hayRegistros(){         
      return true;       
  }

  //mostrar todos los datos del usuario 
  MostrarTodos() {           
      this.APIphp.MostrarUsers(this.NombreUser).subscribe(result =>{
        this.usuario = result});    
  }

  //metodo de desabilitar
  Desabilitar(iduser: string){
    
    if(iduser == ""){
      alert("Especifique el id del usuario a desabilitar");
    }else{
      
      this.APIphp.DesUsers(iduser).subscribe(datos =>{
        
        if((datos['resultado'] == 'OK')) {        
          alert("Usuario Desabilitado");
          this.MostrarTodos();

        }else{          
          alert((datos['resultado']));
          
        }      

      });                
    }            
  }

  //metodo de cambiar de pasword
  Cambiarpas(iduser: string, newpas: string){

  }

  //metodo de habilitar
  Habilitar(iduser:string){

  }

}
