package com.example.aplicacioninfantil;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MenuEstudiar extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu_estudiar);
    }

    //boton abecedario
    public void OnClinkAbecedario(View boton){
        //setContentView(R.layout.activity_frm_abecedario);
        Intent FrmAbecedario = new Intent(this, FrmAbecedario.class);
        startActivity(FrmAbecedario);
    }
}