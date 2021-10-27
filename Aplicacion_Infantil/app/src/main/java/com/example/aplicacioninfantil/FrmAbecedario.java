package com.example.aplicacioninfantil;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.Toast;

import java.lang.String;

public class FrmAbecedario extends AppCompatActivity {

    MediaPlayer mp;
    int opc;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.frm_abecedario);
    }

    public void OnClickRegresar(View boton){
	    this.onBackPressed();
    }

    public void OnClickCambiar(View boton){
        //Crear el Obj Spinner y Enlazarlo con el de Interfaz
        Spinner SpnSelect = (Spinner) findViewById(R.id.spinner);
        //Declarar y Enlazar la Imagen de Pantalla
        ImageView img= (ImageView) findViewById(R.id.img_num1);
        //Enlazar boton de sonido con el que Aparece en Pantalla
        Button btn_son = (Button) findViewById(R.id.btn_sonidoA);

        btn_son.setEnabled(true);

        //Declarar Variable Comparativa con Spinner
        String Comp = String.valueOf(SpnSelect.getSelectedItemId());
        opc = Integer.parseInt(Comp)+1;

        // Toast.makeText(getApplicationContext(),"VALOR COMP : " + Comp,Toast.LENGTH_LONG).show(); //SABER VALOR QUE TIENE LA VARIABLE *Comp*

        switch (opc){
            case 1:
                img.setImageResource(R.mipmap.letra_a);
                mp = MediaPlayer.create(this, R.raw.sonido_a);
                break;
            case 2:
                img.setImageResource(R.mipmap.letra_b);
                mp = MediaPlayer.create(this, R.raw.sonido_b);
                break;
            case 3:
                img.setImageResource(R.mipmap.letra_c);
                mp = MediaPlayer.create(this, R.raw.sonido_c);
                break;
            case 4:
                img.setImageResource(R.mipmap.letra_d);
                mp = MediaPlayer.create(this, R.raw.sonido_d);
                break;
            case 5:
                img.setImageResource(R.mipmap.letra_e);
                mp = MediaPlayer.create(this, R.raw.sonido_e);
                break;
            case 6:
                img.setImageResource(R.mipmap.letra_f);
                mp = MediaPlayer.create(this, R.raw.sonido_f);
                break;
            case 7:
                img.setImageResource(R.mipmap.letra_g);
                mp = MediaPlayer.create(this, R.raw.sonido_g);
                break;
            case 8:
                img.setImageResource(R.mipmap.letra_h);
                mp = MediaPlayer.create(this, R.raw.sonido_h);
                break;
            case 9:
                img.setImageResource(R.mipmap.letra_i);
                mp = MediaPlayer.create(this, R.raw.sonido_i);
                break;
            case 10:
                img.setImageResource(R.mipmap.letra_j);
                mp = MediaPlayer.create(this, R.raw.sonido_j);
                break;
            case 11:
                img.setImageResource(R.mipmap.letra_k);
                mp = MediaPlayer.create(this, R.raw.sonido_k);
                break;
            case 12:
                img.setImageResource(R.mipmap.letra_l);
                mp = MediaPlayer.create(this, R.raw.sonido_l);
                break;
            case 13:
                img.setImageResource(R.mipmap.letra_m);
                mp = MediaPlayer.create(this, R.raw.sonido_m);
                break;
            case 14:
                img.setImageResource(R.mipmap.letra_n);
                mp = MediaPlayer.create(this, R.raw.sonido_n);
                break;
            case 15:
                img.setImageResource(R.mipmap.letra_nn);
                mp = MediaPlayer.create(this, R.raw.sonido_nn);
                break;
            case 16:
                img.setImageResource(R.mipmap.letra_o);
                mp = MediaPlayer.create(this, R.raw.sonido_o);
                break;
            case 17:
                img.setImageResource(R.mipmap.letra_p);
                mp = MediaPlayer.create(this, R.raw.sonido_p);
                break;
            case 18:
                img.setImageResource(R.mipmap.letra_q);
                mp = MediaPlayer.create(this, R.raw.sonido_q);
                break;
            case 19:
                img.setImageResource(R.mipmap.letra_r);
                mp = MediaPlayer.create(this, R.raw.sonido_r);
                break;
            case 20:
                img.setImageResource(R.mipmap.letra_s);
                mp = MediaPlayer.create(this, R.raw.sonido_s);
                break;
            case 21:
                img.setImageResource(R.mipmap.letra_t);
                mp = MediaPlayer.create(this, R.raw.sonido_t);
                break;
            case 22:
                img.setImageResource(R.mipmap.letra_u);
                mp = MediaPlayer.create(this, R.raw.sonido_u);
                break;
            case 23:
                img.setImageResource(R.mipmap.letra_v);
                mp = MediaPlayer.create(this, R.raw.sonido_w);
                break;
            case 24:
                img.setImageResource(R.mipmap.letra_w);
                mp = MediaPlayer.create(this, R.raw.sonido_w);
                break;
            case 25:
                img.setImageResource(R.mipmap.letra_x);
                mp = MediaPlayer.create(this, R.raw.sonido_x);
                break;
            case 26:
                img.setImageResource(R.mipmap.letra_y);
                mp = MediaPlayer.create(this, R.raw.sonido_y);
                break;
            case 27:
                img.setImageResource(R.mipmap.letra_z);
                mp = MediaPlayer.create(this, R.raw.sonido_z);
                break;
        }
    }

    public void reproducir(View boton) {
        mp.start();
    }
}