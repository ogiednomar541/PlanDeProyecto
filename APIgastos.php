<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


//require("./conexion.php");        
//$con = mysqli_connect("localhost","root","","bdprueba");   
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "bdprueba";
$con = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

if(isset($_GET["insertarUsuario"])){
    $data = json_decode(file_get_contents("php://input"));
    
    $nom=$data->nombre;
    $email=$data->email;
    $user=$data->usuario;
    $pas=$data->contra;
    $cpas = $data->confcontra;
    $fecnac = $data->fechanac;

    $estado = "A";
    
    //fecha de registro
    $fecRes = date('Y-m-d');
    
        if(($contrasena!="")&&($nombre!="")){            
                $sqlEmpleaados = mysqli_query($con,"INSERT INTO tbuser(nombre,mail,fechanac,user,pass,dateregister, estatus) VALUES('$nom','$email','$fecnac', $user, $pass,$fecRes, $estatus) ");
                echo json_encode(["success"=>1]);                        
        }
    exit();
} 

if(isset($_GET["iniciosesion"])){
//los datos a recibir
    $user = $_GET['user'];
    $pas = $_GET['pas'];          

  //  $user = "saulo";
    //$pas = "1234";
    //se requiere la conexion a la bd
   // require("./conexion.php");        
   // $con = returnConection();            

	if($user == "" || $pas == "" ){
	//	echo '<script> alert("Error en la API no se enviaron datos "); </script>';	

	}else{
		
      //  echo '<script> alert("logrado mandastes datos de typescript a php para su consulta a la BD !! "); </script>';	

        $cuery = "SELECT * FROM tbusers WHERE user = '".$user."'";                        
        $result = mysqli_query($con,$cuery);

	$numrow = mysqli_num_rows($result);

	class Result{}
        $response = new Result();

	if($numrow > 0) {
		$response->resultado = 'SiAccede';
	}else{
		$response->resultado = 'NoAccede';
	}
                     
        //para cerrar la conexion
        mysqli_close($con);    
     
        echo json_encode($response);

      
	}
}

               
?>

<p>Se esta ejecutando la api...</p>