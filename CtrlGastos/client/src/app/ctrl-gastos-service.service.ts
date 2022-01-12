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
  
  //ejemplo de la tabla gastos personales
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

  //solo me falta el actualizar
  ActualizarGasto(idgas:string,nom: string, desc:string, adeudo:string, tipo:string, ven:string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?ActualizarGasto=1&id=${idgas}&nom=${nom}&desc=${desc}&deu=${adeudo}&tipo=${tipo}&ven=${ven}&user=${user}`);
  }

  //creacion de grupos------------------------------------------------------------------------
   CrearGrupo(nom: string, desc:string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?CrearGrupo=1&nombre=${nom}&desc=${desc}&user=${user}`);
  }

  MostrarGrupos(user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?MostrarGrupos=1&user=${user}`);
  }

  AñadirAGpo(grupo:string, nomuser:string, cantidad:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?AñadirAGpo=1&grupo=${grupo}&nomuser=${nomuser}&cantidad=${cantidad}`);
  }

  MostrarInGpo(grupo:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?MostrarInGpo=1&grupo=${grupo}`);
  }

  //Numero de usuarios que gastan mas por categoria en gastos personales-----------------------------------------
  NumCatUser(user: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?NumUseCat=1&user=${user}`);
  }

  //Gestion de Usuarios ------------------------------------------------------------------------------------------------
  
  //mostrar usaurios
  MostrarUsers(user: string){ 
    return this.http.get(`${this.url}APIgastos.php?MostrarUsuarios=1&user=${user}`);
  }
  
  //Desabilitar usuarios
  DesUsers(id:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?DesabilitarUsuario=1&iduser=${id}`);
  }
  
  //habilitar usuarios
  HabUsers(id:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?HabilitarUsuario=1&iduser=${id}`);
  }

  //cambiar de pasword  
  CamPasUser(id:string, pas: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?NewPasUsuario=1&iduser=${id}&npas=${pas}`);
  }


  //revisar gastos personales pendientes en la pagina principal para notificar
  ConsulVenci(user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?ConsulVen=1&user=${user}`);
  }

  EliminarGastoGpo(grupo:string, user:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?EliminarGastoGpo=1&grupo=${grupo}&user=${user}`);
  }

  Abonar(grupo:string, user:string, cantidad:string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?AbonarGastoGpo=1&grupo=${grupo}&user=${user}&cantidad=${cantidad}`);
  }
}