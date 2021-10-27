package com.example.aplicacioninfantil;
/*
    Los paquetes son una forma de organizar grupos de clases.
    Un paquete contiene un conjunto de clases relacionadas bien por finalidad,
    por ámbito o por herencia. Los paquetes resuelven el problema del conflicto entre los nombres de las clases.
*/
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MenuPricipal extends AppCompatActivity {

    @Override
    /*
        La anotación @Override simplemente se utiliza,
        para forzar al compilador a comprobar en tiempo de compilación
        que estás sobrescribiendo correctamente un método, y de este modo
        evitar errores en tiempo de ejecución, los cuales serían mucho más difíciles de detectar.
    */
    protected void onCreate(Bundle savedInstanceState) {

        /*
            SavedInstanceState es una referencia a un objeto Bundle
            que se pasa al método onCreate de cada actividad de Android.
            Las actividades tienen la capacidad, en circunstancias especiales,
            de restablecerse a un estado anterior utilizando los datos almacenados en este paquete.
        */
        super.onCreate(savedInstanceState);
        /*
            Es la información que desea devolver a su aplicación, a través de onCreate (),
            si la actividad se destruye y se reinicia debido a alguna razón implícita
        */
        setContentView(R.layout.activity_menu_pricipal);
        /*
            SetContentView se utiliza para llenar la ventana con la interfaz de usuario
             proporcionada desde el archivo de diseño en caso de setContentView (R. Layout. Somae_file).
             Aquí, el archivo de diseño se infla para verlo y agregarlo al contexto de la actividad (ventana).
         */
    }


    //llamada de juegos
    public void btnMenuJuegos(View boton) {
        Intent MenuJuegos = new Intent(this, MenuJuegos.class);
        /*Los Intents permiten intercambiar datos
        entre aplicaciones o componentes de aplicaciones,
        como por ejemplo las actividades. También pueden ser
         usados para iniciar actividades o servicios.*/
        startActivity(MenuJuegos);
        /*
        El método startActivity () inicia una instancia de DisplayMessageActivity que especifica el Intent.
        */
    }

    //llamada de estudiar
    public void MenuEstudiar(View boton){
        //setContentView(R.layout.activity_frm_abecedario);
        Intent MenuEstudiar = new Intent(this, MenuEstudiar.class);
        startActivity(MenuEstudiar);
    }

}