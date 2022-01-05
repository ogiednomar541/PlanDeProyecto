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
	    $cuery = "SELECT * FROM tbusers WHERE user = '".$user."'";                        
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
            $mesaje = 'Error usuario no registrado ';            
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

//todo solbre los gastos personales
    //numero de gastos para ver si se muestra la tabla no no xD
    if(isset($_GET["NumGastos"])){
        $user = $_GET["user"];    
        
        $cuery = "SELECT * FROM gastosper WHERE estado =  'A' AND usuario = '".$user."'";                        
        $result = mysqli_query($con,$cuery);
        $numrow = mysqli_num_rows($result);                
        if($numrow > 0) {
            $resp = 'OK';
        }else{
            $resp = 'ERROR';
        }

            //para cerrar la conexion
            mysqli_close($con);   

        $response = ['resultado' => $resp ] ;
        echo json_encode($response);
        exit();  

    }

//Mostrar todos los gastos xD
if(isset($_GET["MostrarGastosIn"])){
    $user = $_GET["user"];

    $cuery = "SELECT * FROM gastosper WHERE estado =  'A' AND usuario = '".$user."'";                        
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
    $cuery = "SELECT * FROM gastosper WHERE idgasto = $idgasto AND usuario = '".$user."'";                        
    $result = mysqli_query($con,$cuery);
    $numrow = mysqli_num_rows($result);                
    if($numrow > 0) {
        
        $cuery = "UPDATE gastosper SET estado = 'B' WHERE idgasto = $idgasto";      
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
        
            $cuery = "SELECT * FROM gastosper WHERE idgasto = $idgasto AND usuario = '".$user."'";                        
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
        $cuery = "INSERT INTO gastosper(nombre,descripcion,tipo,cantidad,fechaex,usuario,estado) VALUES('$nom','$desc','$tipo', $deu, '$ven','$user', 'A')";              
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

?>