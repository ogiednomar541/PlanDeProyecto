package com.example.aplicacioninfantil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import java.io.Console;
import java.util.Random;

public class FrmAnimales extends AppCompatActivity {

    private String[] arregloImagenes = {"Mono","Conejo","Elefante","Jirafa","Perro","Raton","Tiburon","Tigre","Vaca","Venado"};
    private String respuesta;
    private int[] niveles;
    private int posicion = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_animales);
        niveles = new int[5];
        niveles = arregloAleatorio(niveles,10);
        cambiarImagen();
    }

    public void siguiente(View Boton)
    {
        if (posicion+1 < 5)
        {
            posicion++;
            cambiarImagen();
        }
        else
        {
            this.onBackPressed();
        }

    }

    public int[] arregloAleatorio(int[] arreglo, int maxRandom)
	{
        int cant = 0;
        int num = 0;
        boolean flag;
        Random numero = new Random();

        //El primer registro siempre entra
        arreglo[cant] = numero.nextInt(maxRandom);
        cant++;

        do
        {
            flag = true;
            num = numero.nextInt(maxRandom);

            for(int i = 0; i < cant; i++)
            {
                //Si el numero generado se encuentra en el arreglo entonces se sale del ciclo FOR
                if(arreglo[i] == num)
                {
                    flag = false;
                    break;
                }
            }
            //Flag sera TRUE si el numero generado no se encuentra en el arreglo.
            if(flag)
            {
                arreglo[cant] = num;//agregando el numero al arreglo
                cant++;
            }
        }
        while(cant < arreglo.length);

        return arreglo;
	}

    public void cambiarImagen()
    {
        //Crear un imagen view para cambiar la imagen cuando se requiera, enlasandola con la "pic_animal del formulario
        ImageView img= (ImageView) findViewById(R.id.pic_animal);
        //Enlasando los 3 botones que apareceran en pantalla
        Button boton1 = (Button) findViewById(R.id.btn_opc1);
        Button boton2 = (Button) findViewById(R.id.btn_opc2);
        Button boton3 = (Button) findViewById(R.id.btn_opc3);

        boton1.setEnabled(true);
        boton2.setEnabled(true);
        boton3.setEnabled(true);

        TextView lbl_nivel = (TextView) findViewById(R.id.lbl_stage);

        ImageButton next = (ImageButton) findViewById(R.id.btn_next);
        next.setVisibility(Button.INVISIBLE);

        lbl_nivel.setText("Nivel "+(posicion+1)+"/5");

        //Crear un random para uso general
        Random ran = new Random();
        //Es el nombre del animal
        respuesta = arregloImagenes[niveles[posicion]];

        //Cambiar la imagen dada la variable aleatoria "niveles[posicion]"
        switch (niveles[posicion]) {
            case 0:
                img.setImageResource(R.drawable.mono);
                break;
            case 1:
                img.setImageResource(R.drawable.conejo);
                break;
            case 2:
                img.setImageResource(R.drawable.elefante);
                break;
            case 3:
                img.setImageResource(R.drawable.jirafa);
                break;
            case 4:
                img.setImageResource(R.drawable.perro);
                break;
            case 5:
                img.setImageResource(R.drawable.raton);
                break;
            case 6:
                img.setImageResource(R.drawable.tiburon);
                break;
            case 7:
                img.setImageResource(R.drawable.tigre);
                break;
            case 8:
                img.setImageResource(R.drawable.vaca);
                break;
            case 9:
                img.setImageResource(R.drawable.venado);
                break;
        }

        int opc2,opc3;
        int[] orden = new int[3];
        orden = arregloAleatorio(orden, 3);//Decidir el orden aleatoriamente

        //En esta seccion se asignan los nombre que tendran los botones que no sean el correcto
        //Como deben de ser diferentes es esta validando eso
        do
        {
            //Los opc son para el nombre de los botones
            opc2 = ran.nextInt(10);
        }
        while (opc2 == niveles[posicion]);
        do
        {
            opc3 = ran.nextInt(10);
        }
        while (opc3 == opc2 || opc3 == niveles[posicion]);

        switch(orden[0])
        {
            case 0:
                boton1.setText(arregloImagenes[niveles[posicion]]);//Respuesta
                boton2.setText(arregloImagenes[opc2]);
                boton3.setText(arregloImagenes[opc3]);
                break;
            case 1:
                boton1.setText(arregloImagenes[opc2]);
                boton2.setText(arregloImagenes[niveles[posicion]]);//Respuesta
                boton3.setText(arregloImagenes[opc3]);
                break;
            case 2:
                boton1.setText(arregloImagenes[opc3]);
                boton2.setText(arregloImagenes[opc2]);
                boton3.setText(arregloImagenes[niveles[posicion]]);//respuesta
                break;
        }
    }

    public void escoger1(View Boton)
    {
        //Crear un imagen view para cambiar la imagen cuando se requiera, enlasandola con la "pic_animal del formulario
        ImageView img= (ImageView) findViewById(R.id.pic_animal);
        ImageButton next = (ImageButton) findViewById(R.id.btn_next);
        Button boton1 = (Button) findViewById(R.id.btn_opc1);
        Button boton2 = (Button) findViewById(R.id.btn_opc2);
        Button boton3 = (Button) findViewById(R.id.btn_opc3);

        boton1.setEnabled(false);
        boton2.setEnabled(false);
        boton3.setEnabled(false);
        next.setVisibility(Button.VISIBLE);
        if (boton1.getText() == respuesta)
        {
            img.setImageResource(R.drawable.correcto);
        }
        else
        {
            img.setImageResource((R.drawable.erroneo));
        }
    }

    public void escoger2(View Boton)
    {
        //Crear un imagen view para cambiar la imagen cuando se requiera, enlasandola con la "pic_animal del formulario
        ImageView img= (ImageView) findViewById(R.id.pic_animal);
        ImageButton next = (ImageButton) findViewById(R.id.btn_next);
        Button boton1 = (Button) findViewById(R.id.btn_opc1);
        Button boton2 = (Button) findViewById(R.id.btn_opc2);
        Button boton3 = (Button) findViewById(R.id.btn_opc3);

        boton1.setEnabled(false);
        boton2.setEnabled(false);
        boton3.setEnabled(false);
        next.setVisibility(Button.VISIBLE);
        if (boton2.getText() == respuesta)
        {
            img.setImageResource(R.drawable.correcto);
        }
        else
        {
            img.setImageResource((R.drawable.erroneo));
        }
    }

    public void escoger3(View Boton)
    {
        //Crear un imagen view para cambiar la imagen cuando se requiera, enlasandola con la "pic_animal del formulario
        ImageView img= (ImageView) findViewById(R.id.pic_animal);
        ImageButton next = (ImageButton) findViewById(R.id.btn_next);
        Button boton1 = (Button) findViewById(R.id.btn_opc1);
        Button boton2 = (Button) findViewById(R.id.btn_opc2);
        Button boton3 = (Button) findViewById(R.id.btn_opc3);

        boton1.setEnabled(false);
        boton2.setEnabled(false);
        boton3.setEnabled(false);
        next.setVisibility(Button.VISIBLE);
        if (boton3.getText() == respuesta)
        {
            img.setImageResource(R.drawable.correcto);
        }
        else
        {
            img.setImageResource((R.drawable.erroneo));
        }
    }
}