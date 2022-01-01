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
    



?>