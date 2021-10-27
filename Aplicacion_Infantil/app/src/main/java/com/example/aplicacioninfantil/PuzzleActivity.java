package com.example.aplicacioninfantil;

import android.content.ClipData;
import android.content.Intent;
import android.os.Bundle;
import android.view.DragEvent; //Metodo drag an drop el cual nos permite el arrastre de objetos
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class PuzzleActivity extends AppCompatActivity {

    LinearLayout target1,target2,target3,target4,target5,target6,target7,target8,target9; //Grupo de vistas para linear los elementos
    Button test1,test2,test3,test4,test5,test6,test7,test8,test9,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,Regresar_puzzle; //los botones que representan los textos
    int i = 0;  //una variable contadora

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_puzzle); //se asigna el xml

        //declaracion de los target son las id de los layoyout
        target1 = (LinearLayout) findViewById(R.id.target1);
        target2 = (LinearLayout) findViewById(R.id.target2);
        target3 = (LinearLayout) findViewById(R.id.target3);

        target4 = (LinearLayout) findViewById(R.id.target4);
        target5 = (LinearLayout) findViewById(R.id.target5);
        target6 = (LinearLayout) findViewById(R.id.target6);

        target7 = (LinearLayout) findViewById(R.id.target7);
        target8 = (LinearLayout) findViewById(R.id.target8);
        target9 = (LinearLayout) findViewById(R.id.target9);

        //declaracion de botones estaticos

        Regresar_puzzle = (Button) findViewById(R.id.Regresar_puzzle);

        test1 = (Button) findViewById(R.id.test1);
        test2 = (Button) findViewById(R.id.test2);
        test3 = (Button) findViewById(R.id.test3);

        test4 = (Button) findViewById(R.id.test4);
        test5 = (Button) findViewById(R.id.test5);
        test6 = (Button) findViewById(R.id.test6);

        test7 = (Button) findViewById(R.id.test7);
        test8 = (Button) findViewById(R.id.test8);
        test9 = (Button) findViewById(R.id.test9);

        //declaracion de botones con movimiento

        btn1 = (Button) findViewById(R.id.btn1);
        btn2 = (Button) findViewById(R.id.btn2);
        btn3 = (Button) findViewById(R.id.btn3);

        btn4 = (Button) findViewById(R.id.btn4);
        btn5 = (Button) findViewById(R.id.btn5);
        btn6 = (Button) findViewById(R.id.btn6);

        btn7 = (Button) findViewById(R.id.btn7);
        btn8 = (Button) findViewById(R.id.btn8);
        btn9 = (Button) findViewById(R.id.btn9);

        //metodo drag para los estaticos este metodo nos permite saber ciertas cosas que estan sucediento en el layout
        //se pone en modo escucha
        target1.setOnDragListener(dragListenre);
        target2.setOnDragListener(dragListenre);
        target3.setOnDragListener(dragListenre);
        target4.setOnDragListener(dragListenre);
        target5.setOnDragListener(dragListenre);
        target6.setOnDragListener(dragListenre);
        target7.setOnDragListener(dragListenre);
        target8.setOnDragListener(dragListenre);
        target9.setOnDragListener(dragListenre);

        //asignacion del metodo de movimiento para que permita arrastrar los botones
        btn1.setOnLongClickListener(longClickListener);
        btn2.setOnLongClickListener(longClickListener);
        btn3.setOnLongClickListener(longClickListener);
        btn4.setOnLongClickListener(longClickListener);
        btn5.setOnLongClickListener(longClickListener);
        btn6.setOnLongClickListener(longClickListener);
        btn7.setOnLongClickListener(longClickListener);
        btn8.setOnLongClickListener(longClickListener);
        btn9.setOnLongClickListener(longClickListener);

    }


    //metodo para regresar a la pantalla principal
    public void RegresarPrincipal(View boton) {
        this.onBackPressed();
    }
    /*
    vuelve a la Actividad o Fragmento anterior al que te encuentras en el momento
    todo depende de como lo hayas programado
    */

    //metodo para activar una vista cuando se quiere arrastrar algun objeto
    //Se llama cuando se ha hecho clic y se ha mantenido una vista.
    View.OnLongClickListener longClickListener = v -> {

        ClipData data = ClipData.newPlainText("", "");

        View.DragShadowBuilder myShadwoBuilder = new View.DragShadowBuilder(v);
        v.startDrag(data, myShadwoBuilder, v, 0);
        return true;
    };

    //metodo drag el cual es una seria de eventos para saber ciertas cosas con el objeto que se esta arrastrando
    //Se llama cuando se distribuye un evento de arrastre a una vista. Esto permite a los agentes de escucha tener
    //la oportunidad de invalidar el comportamiento de Vista base.

    View.OnDragListener dragListenre = new View.OnDragListener() {
        @Override
        public boolean onDrag(View v, DragEvent event) {
            int dragEvent = event.getAction();
            final View view = (View) event.getLocalState();

            switch(dragEvent){
                case DragEvent.ACTION_DRAG_ENTERED: //Señala a una vista que el punto de arrastre ha entrado en el cuadro delimitador de la vista.

                    break;
                case DragEvent.ACTION_DRAG_EXITED:  //Indica que el usuario ha movido la sombra de arrastre fuera del cuadro delimitador de la vista.

                    break;
                case DragEvent.ACTION_DROP:
                    //Señala a una vista que el usuario ha liberado la sombra de arrastre y el punto de arrastre está dentro del cuadro delimitador de la vista.
                    if (view.getId() == R.id.btn1 && v.getId() == R.id.target1){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        //Define las responsabilidades de una clase que será un elemento primario de una vista. Esta es  una vista cuando desea interactuar con su elemento primario.
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test1.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn2 && v.getId() == R.id.target2){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test2.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn3 && v.getId() == R.id.target3){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test3.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn4 && v.getId() == R.id.target4){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test4.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn5 && v.getId() == R.id.target5){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test5.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn6 && v.getId() == R.id.target6){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test6.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn7 && v.getId() == R.id.target7){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test7.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn8 && v.getId() == R.id.target8){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test8.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else if (view.getId() == R.id.btn9 && v.getId() == R.id.target9){
                        Toast.makeText(PuzzleActivity.this,"Has Acertado",Toast.LENGTH_SHORT).show();
                        LinearLayout oldparent = (LinearLayout) view.getParent();
                        oldparent.removeView(view);
                        LinearLayout newParent = (LinearLayout)v;
                        test9.setVisibility(View.GONE);
                        newParent.addView(view);
                        i++;
                        if (i==9) {
                            Toast.makeText(PuzzleActivity.this,"¡¡FELICIDADES LO HAS LOGRADO!!",Toast.LENGTH_SHORT).show();
                        }
                    }else {
                        Toast.makeText(PuzzleActivity.this,"Incorrecto Intenta de nuevo",Toast.LENGTH_SHORT).show();
                    }
                    break;
            }
            return true;
        }
    };
}