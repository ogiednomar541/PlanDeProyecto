package com.example.aplicacioninfantil;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MenuJuegos extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu_juegos);
    }

    public void mostrarFrmAnimales(View boton)
    {
        Intent FrmAnimales = new Intent(this, FrmAnimales.class);
        startActivity(FrmAnimales);
    }

    public void btnOrdenaLosNumeros(View boton) {
        Intent PuzzleActivity = new Intent(this, PuzzleActivity.class);
        startActivity(PuzzleActivity);
    }

    /*
    public void OnClinkAbecedario(View boton){
        //setContentView(R.layout.activity_frm_abecedario);
        Intent FrmAbecedario = new Intent(this, FrmAbecedario.class);
        startActivity(FrmAbecedario);
    }
    */


}