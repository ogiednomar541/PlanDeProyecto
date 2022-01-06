import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
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
  NombreUser = 'sin nombre';

  //variables para 
  opcionSeleccionado: string  = 'Diversion';
  fechaext: string = '2022-01-01';

  verSeleccion: string  = '';
  Nombregasto: string = '';
  descripcion: string = '';
  cantidad: string = '';
  fechaex: string = '';
  idGasto: string = '';  
  idactual: number = 0;


  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router ){}

  ngOnInit() {
    this.NombreUser = this.cookie.get("NombreUser");  
    console.log(this.NombreUser);
    //metod para obtener el numero gastos de id    
    //metodo me regresa  0 entonces apartir de 1 se empezaran a registrar 
    //y si me regresa mas de 0 ps me empezara a agregar apartir de ellos
    this.ObtenerNumGas();        
    this.idactual++;    
    console.log("id gasto principal: "+this.idactual);
    this.MostrarTodos();
  }

  ObtenerNumGas(){
     this.APIphp.NumGastos(this.NombreUser).subscribe(datos =>{        
      if((datos['resultado'] == 'OK')) {  
        this.idactual = datos['resp'];
      }                
    });  
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
  hayRegistros(){         
      return true;       
  }

  //mostrar todos los datos del usuario 
  MostrarTodos() {           
      this.APIphp.MostrarGastp(this.NombreUser).subscribe(result =>{
        this.gasto = result});    
  }

//eliminar un gasto
  Eliminar(idgasto: string, user: string){    
    console.log(idgasto);
    console.log(user);   
    if(idgasto == '' || user == ''){
      alert("Error Codigo de Gasto vacio");
    }else{    
    
      this.APIphp.EliminarGasto(idgasto, user).subscribe(datos =>{
        if(datos['resultado'] === 'OK') {        
          this.MostrarTodos();
        }else{
          alert("Error Codigo de Gasto no valido");
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
          alert("Error Cidigo de Gasto no valido");
        }
      });  
    }        
  }

  //se va a cambiar el agregar gasto
  Agregar(nom: string, desc:string, adeudo:string, tipo:string, ven:string, user:string){
    
    if(nom == '' || desc == ''|| adeudo == ''|| tipo == ''|| ven == ''|| user == ''){
      alert("Error no deje campos vacios!...");
    }else{  
      console.log("numero de id de gasto antes de registrar: "+this.idactual);  
      this.APIphp.AgregarGasto(nom,desc,adeudo,tipo,ven,user).subscribe(datos =>{
        if(datos['resultado'] === 'OK'){
            this.idGasto = '';
            this.Nombregasto = '';
            this.descripcion = '';
            this.verSeleccion = '';
            this.cantidad = '';
            this.fechaex =  '';          
            this.idactual++;            
            console.log("numero de id de gasto despues de registrar uno:"+this.idactual);
          this.MostrarTodos();
        }else{
          alert("Error no se pudo crear el nuevo gasto, No se permiten fechas anteriores a la actual!..");
        }
      });
    }    
  }

//se va a camciar
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
