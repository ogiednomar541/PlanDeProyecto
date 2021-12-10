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
   return this.http.get(`${this.url}"Login.php?user=${user},pas=${password}`);
  } 

  RegistrarUsuario(datosUsuario:any):Observable<any>{
    return this.http.post(this.url+"?Registro=1",datosUsuario);
  }

}