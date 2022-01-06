import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CtrlGastosServiceService {
   url = 'http://localhost/APIphp/';
  
  //variable que guarda un usuario
  usuarioLog: string = 'sin nombre';

   constructor(private http: HttpClient) {  
    // this.usuario = "null";
   }

   //setMyuser(user: string){
     // this.usuario = user;
   //}
   
   //metodo del login
  checkUser(user: string,password: string):Observable<any>{    
    this.usuarioLog = user;           
    return this.http.get(`${this.url}APIgastos.php?iniciosesion=1&user=${user}&pas=${password}`);    
  } 

  getMyuser(): string{
      return this.usuarioLog;
   }

   //metodo para registrar usuario
  RegistrarUsuario(datosUsuario:any):Observable<any>{
    console.log("Dentro de registrar usuario");
    return this.http.post(`${this.url}APIgastos.php?insertarUsuario=1`,datosUsuario);
  }
  
  //metodo para obtener los datos del usuario logeado
  obtenerCuenta(user: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?obtenerusuario=1&user=${user}`);
  }

  //metodo para cambiar la contraseña del usuario
  cambiarClave(user: string,pas: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?Cambiarclave=1&user=${user}&pas=${pas}`);
  }

  

  
  
  //metodos para Historial de gastos
  MostrarHistGasp(user: string){
    return this.http.get(`${this.url}APIgastos.php?MostrarHistGastosIn=1&user=${user}`);
  }

  //todo los metodos de gastos personales-------------------------------
  //numero de registros
  NumGastos(user: string):Observable<any>{
      return this.http.get(`${this.url}APIgastos.php?NumGastos=1&user=${user}`);
  }
  
  //Numero de datos de clasificaciones del historial del usuario
  NumDatoclasi(user: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?NumDatoClasi=1&user=${user}`);
}

  //ejemplo de la tabla
  MostrarGastp(user: string){
    return this.http.get(`${this.url}APIgastos.php?MostrarGastosIn=1&user=${user}`);
  }
  
  EliminarGasto(idgasto: string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?EliminarGasto=1&idgasto=${idgasto}&user=${user}`);
  }

  SeleccionarGasto(idgasto: string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?SeleccionarGasto=1&idgasto=${idgasto}&user=${user}`);
  }

  AgregarGasto(nom: string, desc:string, adeudo:string, tipo:string, ven:string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?AgregarGasto=1&nom=${nom}&desc=${desc}&deu=${adeudo}&tipo=${tipo}&ven=${ven}&user=${user}`);
  }

  //solo me falta el actualizar xD
  ActualizarGasto(idgas:string,nom: string, desc:string, adeudo:string, tipo:string, ven:string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?ActualizarGasto=1&id=${idgas}&nom=${nom}&desc=${desc}&deu=${adeudo}&tipo=${tipo}&ven=${ven}&user=${user}`);
  }

}