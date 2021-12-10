import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CtrlGastosServiceService {
   url = 'http://localhost/APIphp/';
  
   constructor(private http: HttpClient) { }

  checkUser(user: string,password: string):Observable<any>{            
   return this.http.get(`${this.url}APIgastos.php?iniciosesion=1&user=${user}&pas=${password}`);
  } 

  RegistrarUsuario(datosUsuario:any):Observable<any>{
    console.log("Dentro de registrar usuario");
    return this.http.post(`${this.url}APIgastos.php?insertarUsuario=1`,datosUsuario);
  }

  
  obtenerCuenta(){
    return this.http.get(this.url);
  }
  

}