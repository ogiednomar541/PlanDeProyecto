<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


//require("./conexion.php");        
//$con = mysqli_connect("localhost","root","","bdprueba");   
$servidor = "localhost"; $usuario = "root"; $contrasenia = "saulo2000"; $nombreBaseDatos = "bdprueba";
$con = mysqli_connect($servidor, $usuario, $contrasenia, $nombreBaseDatos, "3306");
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}


//echo "Connected successfully";
if(isset($_GET["insertarUsuario"])){
    $body = file_get_contents("php://input");
    $data = json_decode($body);
    
    $nom=$data->nombre;
    $email=$data->email;
    $user=$data->usuario;
    $pas=$data->contra;
    $cpas = $data->confcontra;
    $fecnac = $data->fechanac;

    $estado = "A";
    
    //fecha de registro
    $fecRes = date('Y-m-d');
            
        if($nom == "" || $email == "" || $user == "" || $pas == "" ||  $cpas == "" || $fecnac==""){
            $resp = 'No';
            $mesaje = 'Error no deje campos en blanco';   
        }else if($pas !== $cpas){
            $resp = 'No';
            $mesaje = 'Error los passwords no coinciden verifique';   
        }else{       
                $cuery = "SELECT * FROM tbusers WHERE user = '".$user."'";                        
                $result = mysqli_query($con,$cuery);
                $numrow = mysqli_num_rows($result);                        

                if($numrow > 0) {
                    $resp = 'No';
                    $mesaje = 'Error usuario ya esta registrado escoja otro username';            
                }else{                        

                    $cuery = "SELECT * FROM tbusers WHERE mail = '".$email."'";                        
                    $result = mysqli_query($con,$cuery);
                    $numrowv = mysqli_num_rows($result);                

                    if($numrowv > 0) {

                        $resp = 'No';
                        $mesaje = 'Error usuario ya esta registrado con ese correo';            

                    }else{                                                
                        $cuery = "INSERT INTO tbusers(nombre,mail,fechanac,user,pass,dateregister, estatus) VALUES('$nom','$email','$fecnac', '$user', '$pas','$fecRes', '$estado')";              
                        $result = mysqli_query($con,$cuery);
                        $resp = 'Si';
                        $mesaje = 'Nuevo usuario Registrado';            
                    }
                }
        } 
         //para cerrar la conexion
         mysqli_close($con);   
        $response = ['resultado' => $resp, 'mesaje' => $mesaje  ] ;
        echo json_encode($response);        
        exit();
} 

//------------------------------------------------------------------------------------------------------------------------------------------------------------
if(isset($_GET["iniciosesion"])){
//los datos a recibir
    $user = $_GET['user'];
    $pas = $_GET['pas'];          

	if($user == "" || $pas == "" ){
	//	echo '<script> alert("Error en la API no se enviaron datos "); </script>';	
        $resp = 'Error';
        $mesaje = 'Error usuario o password vacios';
        //echo json_encode($response);
        //exit();
	}else{		        
	    //  echo '<script> alert("logrado mandastes datos de typescript a php para su consulta a la BD !! "); </script>';	
	    $cuery = "SELECT * FROM tbusers WHERE estatus = 'A' AND user = '".$user."'";                        
	    $result = mysqli_query($con,$cuery);
        while ($row = mysqli_fetch_array($result)){                                                                
            $pasw = "".$row['pass'];                        
        }  
	    $numrow = mysqli_num_rows($result);                
	    if($numrow > 0) {

            if($pas == $pasw){
                $resp = 'SiAccede';
                $mesaje = 'Accedio con exito';            
            }else{
                $resp = 'NoAccede';
                $mesaje = 'Error clave incorrecta';            
            }	        
	    }else{            
		    $resp = 'NoAccede';
            $mesaje = 'Error usuario no registrado o Desabilitado por el Administrador ';            
        }        
        //para cerrar la conexion
        mysqli_close($con);    
        
        $response = ['resultado' => $resp, 'mesaje' => $mesaje  ] ;
        echo json_encode($response);
        exit();              
	}
}

//Obtencion de datos del usuario
if(isset($_GET["obtenerusuario"])){
    //los datos a recibir
        $user = $_GET['user'];        
    
        if($user == "" ){
        //	echo '<script> alert("Error en la API no se enviaron datos "); </script>';	
            $resp = 'Error';
            $mesaje = 'Error No Introdujo un usuario ';
            //echo json_encode($response);
            //exit();
        }else{		        
            //  echo '<script> alert("logrado mandastes datos de typescript a php para su consulta a la BD !! "); </script>';	
            $cuery = "SELECT * FROM tbusers WHERE user = '".$user."'";                        
            $result = mysqli_query($con,$cuery);
            while ($row = mysqli_fetch_array($result)){                                                                
                $nombre = "".$row['nombre'];                        
                $mail = "".$row['mail'];                        
                $pasw = "".$row['pass'];  
                $fechnac = "".$row['fechanac'];  
            }  
            $numrow = mysqli_num_rows($result);                
            if($numrow > 0) {
                $resp = 'SiAccede';
                $mesaje = 'Usuario Encontrado Mostrando datos';           
                $response = ['resultado' => $resp, 'mesaje' => $mesaje, 'nombre' => $nombre, 'email' => $mail, 'pasword' => $pasw, 'fechanac' => $fechnac]; 
            }else{            
                $resp = 'NoAccede';
                $mesaje = 'Error usuario no Encontrado ';           
                $response = ['resultado' => $resp, 'mesaje' => $mesaje] ;
            }        
            //para cerrar la conexion
            mysqli_close($con);                            
            echo json_encode($response);
            exit();              
        }
    }
    
//cambiar clave
if(isset($_GET["Cambiarclave"])){
        //los datos a recibir
        $user = $_GET['user'];
        $pas = $_GET['pas'];          
    
        if($user == "" || $pas == "" ){
        //	echo '<script> alert("Error en la API no se enviaron datos "); </script>';	
            $resp = 'Error';
            $mesaje = 'Error usuario o pasword vacios no se realizo la modificacion de su clave';
            //echo json_encode($response);
            //exit();
        }else{         

            //si ubico al usuario
            $cuery = "SELECT * FROM tbusers WHERE user = '".$user."'";                        
            $result = mysqli_query($con,$cuery);
            $numrow = mysqli_num_rows($result);                
            if($numrow > 0) {
                
                $cuery = "UPDATE tbusers SET pass = '$pas' WHERE user = '$user'";
                $result = mysqli_query($con,$cuery);                                   
                
                $resp = 'SiAccede';
                $mesaje = 'clave cambiada con exito se aplicaran los cambios cuando cierre sesion y vuelva a ingresar';                           

            }else{            
                $resp = 'Error';
                $mesaje = 'No se pudo cambiar la clave no se identifico el usuario';                               
            }                                                         
        }
        //para cerrar la conexion
        mysqli_close($con);   
        
        $response = ['resultado' => $resp, 'mesaje' => $mesaje  ] ;
        echo json_encode($response);
        exit();  
    }

//todo solbre los gastos personales -----------------------------------------------------
    //numero de gastos para ver si se muestra la tabla no no xD
    if(isset($_GET["NumGastos"])){
        $user = $_GET["user"];    
        
        $cuery = "SELECT * FROM gastosper WHERE estado =  'PENDIENTE' AND usuario = '".$user."'";                        
        $result = mysqli_query($con,$cuery);
        $numrow = mysqli_num_rows($result);                
        if($numrow > 0) {
            $resp = 'OK';            
        }else{
            $resp = 'OK';
        }

        //para cerrar la conexion
        mysqli_close($con);   

        $response = ['resultado' => $resp, 'resp' => $numrow ] ;
        echo json_encode($response);
        exit();  
    }

//Mostrar todos los gastos xD
if(isset($_GET["MostrarGastosIn"])){
    $user = $_GET["user"];

    $cuery = "SELECT * FROM gastosper WHERE estado =  'PENDIENTE' AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);          
    $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    //para cerrar la conexion    
    mysqli_close($con);   

    echo json_encode($row);
    exit();
}

//Eliminar un gasto
if(isset($_GET["EliminarGasto"])){
    $idgasto = $_GET["idgasto"];
    $user = $_GET["user"];

    //se revisa que si existe dicho gasto con dicho nombre de usuario
    $cuery = "SELECT * FROM gastosper WHERE idgasto = $idgasto AND usuario = '$user' AND estado = 'PENDIENTE'";                        
    $result = mysqli_query($con,$cuery);
    $numrow = mysqli_num_rows($result);                
    if($numrow > 0) {                

        //si ya se elimino no volverlo a eliminar                
            $cuery = "UPDATE gastosper SET estado = 'PAGADO' WHERE idgasto = $idgasto AND usuario = '$user' AND estado = 'PENDIENTE'";      
            $result = mysqli_query($con,$cuery);      
            $resp = 'OK';                    
    
    }else{
        $resp = 'Error';    
    }
            
    //para cerrar la conexion
    mysqli_close($con);           
    $response = ['resultado' => $resp ] ;
    echo json_encode($response);  
    exit();
}

//Seleccionar un gasto
if(isset($_GET["SeleccionarGasto"])){
    $idgasto = $_GET["idgasto"];
    $user = $_GET["user"];
        
            $cuery = "SELECT * FROM gastosper WHERE idgasto = $idgasto AND usuario = '$user' AND estado = 'PENDIENTE'";                        
            $result = mysqli_query($con,$cuery);
            while ($row = mysqli_fetch_array($result)){                                                                
                                
                $nombre = "".$row['nombre'];                        
                $descripcion = "".$row['descripcion'];                        
                $tipo = "".$row['tipo'];  
                $cantidad = "".$row['cantidad'];  
                $fechaex = "".$row['fechaex'];  

            }  
            $numrow = mysqli_num_rows($result);                
            if($numrow > 0) {
                $resp = 'OK';                
                $response = ['resultado' => $resp, 'idgasto' => $idgasto, 'nombre' => $nombre, 'descripcion' => $descripcion, 'tipo' => $tipo, 'cantidad' => $cantidad, 'fechaex' => $fechaex]; 
            }else{            
                $resp = 'Error';                
                $response = ['resultado' => $resp] ;
            }        
            //para cerrar la conexion
            mysqli_close($con);                            
            echo json_encode($response);
            exit();              
}

//insetar un gasto
if(isset($_GET["AgregarGasto"])){
    
    $nom = $_GET["nom"];
    $desc = $_GET["desc"];
    $deu = $_GET["deu"];
    $tipo = $_GET["tipo"];
    $ven = $_GET["ven"];
    $user = $_GET["user"];

    $fecRes = date('Y-m-d');

    $fechaactual =strtotime(date('Y-m-d'));
    $fechaEnt = strtotime($ven);

    if( $fechaEnt < $fechaactual ){
        $resp = 'Error';
    }else{                        
        $cuery = "INSERT INTO gastosper(nombre,descripcion,tipo,cantidad,fechaex,usuario,estado) VALUES('$nom','$desc','$tipo', $deu, '$ven','$user', 'PENDIENTE')";              
        $result = mysqli_query($con,$cuery);    
        $resp = 'OK';            
    }
        
    $response = ['resultado' => $resp];    
    //para cerrar la conexion
    mysqli_close($con);                            
    echo json_encode($response);
    exit();              

}

//Actualizar gasto
if(isset($_GET["ActualizarGasto"])){
    
    $id = $_GET["id"];
    $nom = $_GET["nom"];
    $desc = $_GET["desc"];
    $deu = $_GET["deu"];
    $tipo = $_GET["tipo"];
    $ven = $_GET["ven"];
    $user = $_GET["user"];

    $fecRes = date('Y-m-d');

    $fechaactual =strtotime(date('Y-m-d'));
    $fechaEnt = strtotime($ven);

    if( $fechaEnt < $fechaactual ){
        //para el nombre
        $cuery = "UPDATE gastosper SET nombre = '$nom' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para la descripcion
        $cuery = "UPDATE gastosper SET descripcion = '$desc' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para el tipo
        $cuery = "UPDATE gastosper SET tipo = '$tipo' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para la cantidad
        $cuery = "UPDATE gastosper SET cantidad = $deu WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      
        
        $resp = 'Error';
    }else{    

        //para el nombre
        $cuery = "UPDATE gastosper SET nombre = '$nom' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para la descripcion
        $cuery = "UPDATE gastosper SET descripcion = '$desc' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para el tipo
        $cuery = "UPDATE gastosper SET tipo = '$tipo' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para la cantidad
        $cuery = "UPDATE gastosper SET cantidad = $deu WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      

        //para el vencimiento
        $cuery = "UPDATE gastosper SET fechaex = '$ven' WHERE idgasto = $id";              
        $result = mysqli_query($con,$cuery);      
        
        $resp = 'OK';            
    }
        
    $response = ['resultado' => $resp];    
    //para cerrar la conexion
    mysqli_close($con);                            
    echo json_encode($response);
    exit();              

}

//mostrar Historial de gastos personales
if(isset($_GET["MostrarHistGastosIn"])){
    $user = $_GET["user"];

    //sin ASC es de mayor a menor
    $cuery = "SELECT * FROM gastosper WHERE usuario = '$user' ORDER BY fechaex DESC";                        
    $result = mysqli_query($con,$cuery);          
    $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    //para cerrar la conexion    
    mysqli_close($con);   
    echo json_encode($row);
    exit();
}

//numero de tuplas por clasificacion por usuario logeado
if(isset($_GET["NumDatoClasi"])){
    $user = $_GET["user"];    
    
    //empezamos por divercion
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Diversion' AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);
    $numdiv = mysqli_num_rows($result);                    
    $resp = 'OK';            

    //comida
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Comida' AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);
    $numcom = mysqli_num_rows($result);                        

    //salud
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Salud' AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);
    $numsal = mysqli_num_rows($result);                        
    
    //hogar
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Hogar' AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);
    $numho = mysqli_num_rows($result);                        
    
    //otro
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Otro' AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);
    $numot = mysqli_num_rows($result);                        
            
    //para cerrar la conexion
    mysqli_close($con);   

    $response = ['resultado' => $resp, 'diver' => $numdiv, 'comida' => $numcom, 'salud' => $numsal, 'hogar' => $numho, 'otro' => $numot ] ;
    echo json_encode($response);
    exit();  
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------
if(isset($_GET["CrearGrupo"])){
    $body = file_get_contents("php://input");
    
    $nom=$_GET["nombre"];
    $desc=$_GET["desc"];
    $user=$_GET["user"];
    //fecha de registro
    $status = "A";

        if($nom == "" || $desc == "" || $user == "" ||  $status == ""){
            $resp = 'No';
            $mesaje = 'Error no deje campos en blanco';     
        }else{       
                $cuery = "SELECT * FROM tbgroup WHERE namegp = '".$nom."'";                        
                $result = mysqli_query($con,$cuery);
                $numrow = mysqli_num_rows($result);                        
		if($numrow > 0) {                                              
                    $resp = 'No';
                    $mesaje = 'Error El nombre de grupo ya existe';                                 
                            
                }else{                        

                    $cuery = "INSERT INTO tbgroup(namegp,descripcion,user,fechacreac,status) VALUES('$nom','$desc', '$user',current_date(), '$status')";              
                    $result = mysqli_query($con,$cuery);
                    $resp = 'Si';
                    $mesaje = 'Se agrego correctamente'; 
                }
        } 
         //para cerrar la conexion
         mysqli_close($con);   
        $response = ['resultado' => $resp, 'mesaje' => $mesaje  ] ;
        echo json_encode($response);        
        exit();
} 
//------------------------------------------------------------------------------------------------------------------------------------------------------------
if(isset($_GET["MostrarGrupos"])){
    $user = $_GET["user"];

    //sin ASC es de mayor a menor
    $cuery = "SELECT * FROM tbpergpo WHERE user = '$user'";                        
    $result = mysqli_query($con,$cuery);          
    $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    //para cerrar la conexion    
    mysqli_close($con);   
    echo json_encode($row);
    exit();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
if(isset($_GET["AñadirAGpo"])){
    $body = file_get_contents("php://input");
    
    $grupo=$_GET["grupo"];
    $nomuser=$_GET["nomuser"];
    $cantidad=$_GET["cantidad"];
    //fecha de registro

        if($grupo == "" || $nomuser == "" || $cantidad == ""){
            $resp = 'No';
            $mesaje = 'Error no deje campos en blanco';     
        }else{       
                $cuery = "SELECT * FROM tbusers WHERE user = '".$nomuser."'";                        
                $result = mysqli_query($con,$cuery);
                $numrow = mysqli_num_rows($result);                        
		if($numrow > 0) {       
		    $cuery = "SELECT * FROM tbpergpo WHERE user = '".$nomuser."' AND namegp = '".$grupo."'";                        
                    $result = mysqli_query($con,$cuery);
                    $numrow = mysqli_num_rows($result);   
		    if($numrow > 0) {                               
                    	$resp = 'No';
                    	$mesaje = 'Error El usuario ya existe en este grupo';                         
                    }else{
			$cuery = "INSERT INTO tbpergpo(namegp,user,cantidad,fecharegis) VALUES('$grupo','$nomuser', '$cantidad',current_date())";              
                    	$result = mysqli_query($con,$cuery);
                    	$resp = 'Si';
                    	$mesaje = 'Se agrego correctamente';
		    }        
                }else{                        
		    $resp = 'No';
                    $mesaje = 'Error El usuario no existe';
                    
                }
        } 
         //para cerrar la conexion
         mysqli_close($con);   
        $response = ['resultado' => $resp, 'mesaje' => $mesaje  ] ;
        echo json_encode($response);        
        exit();
} 
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//Mostrar todos los gastos xD
if(isset($_GET["MostrarInGpo"])){
    $grupo = $_GET["grupo"];

    $cuery = "SELECT * FROM tbpergpo WHERE namegp =  '".$grupo."'";                        
    $result = mysqli_query($con,$cuery);          
    $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    //para cerrar la conexion    
    mysqli_close($con);   

    echo json_encode($row);
    exit();
}
//-----------------------------------------------------------------------------------------------------------

//numero de tuplas por clasificacion todos los usuarios
if(isset($_GET["NumUseCat"])){
    $user = $_GET["user"];   //usuario AdminAdmin 
    
    //empezamos por divercion    
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Diversion'";  //AND usuario = '".$user."'
    $result = mysqli_query($con,$cuery);
    $numdiv = mysqli_num_rows($result);                    
    $resp = 'OK';            

    //comida
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Comida'";  // AND usuario = '".$user."'                      
    $result = mysqli_query($con,$cuery);
    $numcom = mysqli_num_rows($result);                        

    //salud
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Salud'";  //AND usuario = '".$user."'                      
    $result = mysqli_query($con,$cuery);
    $numsal = mysqli_num_rows($result);                        
    
    //hogar
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Hogar'"; //AND usuario = '".$user."'                       
    $result = mysqli_query($con,$cuery);
    $numho = mysqli_num_rows($result);                        
    
    //otro
    $cuery = "SELECT * FROM gastosper WHERE tipo = 'Otro'"; // AND usuario = '".$user."'                       
    $result = mysqli_query($con,$cuery);
    $numot = mysqli_num_rows($result);                        
            
    //para cerrar la conexion
    mysqli_close($con);   

    $response = ['resultado' => $resp, 'diver' => $numdiv, 'comida' => $numcom, 'salud' => $numsal, 'hogar' => $numho, 'otro' => $numot ] ;
    echo json_encode($response);
    exit();  
}

//modulo de gestion de usuarios-------------------------------------------------
//mostrar usuarios
if(isset($_GET["MostrarUsuarios"])){
    $user = $_GET["user"];

    $cuery = "SELECT * FROM tbusers WHERE user != '$user' ORDER BY idusers ASC ";                        
    $result = mysqli_query($con,$cuery);          
    $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    //para cerrar la conexion    
    mysqli_close($con);   
    echo json_encode($row);
    exit();
}

//desabilitar usuario
if(isset($_GET["DesabilitarUsuario"])){
    $iduser = $_GET["iduser"];

    if ($iduser == 1){
        $resp = 'Error Especifique un id de usuario Valido';                
        $response = ['resultado' => $resp] ;
    }else{

        $cuery = "SELECT * FROM tbusers WHERE idusers = $iduser ";                        
        $result = mysqli_query($con,$cuery);              
        $numrow = mysqli_num_rows($result);                
    
        if($numrow > 0) {
            $cuery = "UPDATE tbusers SET estatus = 'B' WHERE idusers = '$iduser'";
            $result = mysqli_query($con,$cuery);                                   

            $resp = 'OK';                
            $response = ['resultado' => $resp ]; 
        
        }else{            
            $resp = 'Error Especifique un id de usuario Valido';                
            $response = ['resultado' => $resp] ;
        }        
    }    
    //para cerrar la conexion
    mysqli_close($con);                            
    echo json_encode($response);
    exit();            
}

//Habilitar usuario
if(isset($_GET["HabilitarUsuario"])){
    $iduser = $_GET["iduser"];

    if ($iduser == 1){
        $resp = 'Error Especifique un id de usuario Valido';                
        $response = ['resultado' => $resp] ;
    }else{

        $cuery = "SELECT * FROM tbusers WHERE idusers = $iduser ";                        
        $result = mysqli_query($con,$cuery);              
        $numrow = mysqli_num_rows($result);                
        
        if($numrow > 0) {
            $cuery = "UPDATE tbusers SET estatus = 'A' WHERE idusers = '$iduser'";
            $result = mysqli_query($con,$cuery);                                   

            $resp = 'OK';                
            $response = ['resultado' => $resp ]; 
        
        }else{            
            $resp = 'Error Especifique un id de usuario Valido';                
            $response = ['resultado' => $resp] ;
        }     
    }
    //para cerrar la conexion
    mysqli_close($con);                            
    echo json_encode($response);
    exit();            
}

//cambiar pasword de un usuario por id desde administrador
if(isset($_GET["NewPasUsuario"])){
    $iduser = $_GET["iduser"];
    $npas = $_GET["npas"];

    if ($iduser == 1){
        
        $resp = 'Error Especifique un id de usuario Valido';                
        $response = ['resultado' => $resp] ;

    }else{
        $cuery = "SELECT * FROM tbusers WHERE idusers = $iduser ";                        
        $result = mysqli_query($con,$cuery);              
        $numrow = mysqli_num_rows($result);                    
    
        if($numrow > 0) {
            $cuery = "UPDATE tbusers SET pass = '$npas' WHERE idusers = '$iduser'";
            $result = mysqli_query($con,$cuery);                                   

            $resp = 'OK';                
            $response = ['resultado' => $resp ];         
        }else{            
            $resp = 'Error Especifique un id de usuario Valido';                
            $response = ['resultado' => $resp] ;
        }        
    }    
    //para cerrar la conexion
    mysqli_close($con);                            
    echo json_encode($response);
    exit();            
}

    //obtener vencidos desde principal
    
    
    //cambiar pasword de un usuario por id desde administrador
if(isset($_GET["ConsulVen"])){
    $user = $_GET["user"];  

    $fecRes = date('Y-m-d');
    
        $cuery = "SELECT * FROM gastosper WHERE usuario = '$user' AND fechaex < '$fecRes' AND estado = 'PENDIENTE' ";                        
        $result = mysqli_query($con,$cuery);              
        $numrow = mysqli_num_rows($result);                        
        if($numrow > 0) {                
            $response = ['resultado' => $numrow];         //, 'fechaphp' => $fecRes 
        }else{
            $response = ['resultado' => $numrow];         //, 'fechaphp' => $fecRes 
        }

    //para cerrar la conexion
    mysqli_close($con);                            
    echo json_encode($response);
    exit();            
}
?>