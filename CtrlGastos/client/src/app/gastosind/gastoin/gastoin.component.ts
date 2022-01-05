import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gastoin',
  templateUrl: './gastoin.component.html',
  styleUrls: ['./gastoin.component.scss']
})
export class GastoinComponent implements OnInit {
  
  titulo = 'Gastos Personales Del Usuario: ';
  gasto: any ;
  Gastos = '';
  /*
  {
    idgasto: "",
    nombre: "",
    descripcion: "",
    tipo: "",
    cantidad: "",
    fechaex: "",
    usuario: "",
    estado: ""
  }
*/
  NombreUser = 'sin nombre';

  //variables para 
  opcionSeleccionado: string  = '0';
  fechaext: string = '';

  verSeleccion: string  = '';
  Nombregasto: string = '';
  descripcion: string = '';
  cantidad: string = '';
  fechaex: string = '';
  idGasto: string = '';


  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router ){}

  ngOnInit() {
    this.NombreUser = this.cookie.get("NombreUser");  
    this.MostrarTodos();
  }

  //Obtenccion de los datos
  obtenertipo() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  } 

  obtenervenci(){
    this.fechaex = this.fechaext;
  }

  //ver si hay registros
  val = '';
  hayRegistros(){           
    this.APIphp.NumGastos(this.NombreUser).subscribe(datos =>{        
      if((datos['resultado'] == 'OK')) {  
        this.val = "true";
      }else{
       this.val = "false";
      }            
    });              

    return this.val;
  }

  //mostrar todos los datos del usuario 
  MostrarTodos() {
    this.APIphp.mostrarTodos(this.NombreUser).subscribe(result =>{
      this.gasto = result});          
    //console.log(this.usuario);
  }
    
//eliminar un gasto
  Eliminar(idgasto: string, user: string){    
    console.log(idgasto);
    console.log(user);   
    if(idgasto == '' || user == ''){
      alert("Error Id-gasto vacio");
    }else{    
    
      this.APIphp.EliminarGasto(idgasto, user).subscribe(datos =>{
        if(datos['resultado'] === 'OK') {        
          this.MostrarTodos();
        }else{
          alert("Error Id-gasto no valido");
        }
      });
    
    }
  }
      
  Seleccionar(idgasto: string, user: string){

    console.log(idgasto);
    console.log(user);

    if(idgasto == '' || user == ''){
      alert("Error Id-gasto vacio");
    }else{    
      this.APIphp.SeleccionarGasto(idgasto,user).subscribe(datos =>{
        if(datos['resultado'] === 'OK') {        
          this.idGasto = datos['idgasto'];
          this.Nombregasto = datos['nombre'];
          this.descripcion = datos['descripcion'];
          this.verSeleccion = datos['tipo'];
          this.cantidad = datos['cantidad'];
          this.fechaex =  datos['fechaex'];
        }else{
          alert("Error Id-Gasto no valido");
        }
      });  
    }        
  }

  Agregar(nom: string, desc:string, adeudo:string, tipo:string, ven:string, user:string){
    
    if(nom == '' || desc == ''|| adeudo == ''|| tipo == ''|| ven == ''|| user == ''){
      alert("Error no deje campos vacios!...");
    }else{    
      this.APIphp.AgregarGasto(nom,desc,adeudo,tipo,ven,user).subscribe(datos =>{
        if(datos['resultado'] === 'OK'){
            this.idGasto = '';
            this.Nombregasto = '';
            this.descripcion = '';
            this.verSeleccion = '';
            this.cantidad = '';
            this.fechaex =  '';          
          this.MostrarTodos();
        }else{
          alert("Error no se pudo crear el nuevo gasto, No se permiten fechas anteriores a la actual!..");
        }
      });
    }    
  }


  Modificar(idgas:string,nom: string, desc:string, adeudo:string, tipo:string, ven:string, user:string){    
    if(idgas == '' || nom == '' || desc == ''|| adeudo == ''|| tipo == ''|| ven == ''|| user == ''){
      alert("Error no deje campos vacios!...");
    }else{    
      this.APIphp.ActualizarGasto(idgas,nom,desc,adeudo,tipo,ven,user).subscribe(datos =>{
        if(datos['resultado'] === 'OK') {               
          this.idGasto = '';
          this.Nombregasto = '';
          this.descripcion = '';
          this.verSeleccion = '';
          this.cantidad = '';
          this.fechaex =  '';          
          this.MostrarTodos();
        }else{
          alert("Error no se pudo Actualizar el vencimiento porque introdujo una fecha menor a la Actual!..");
        }
      });
    }
  }
}
