import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  chart:any;
  NombreUser = 'sin nombre';

  //variables donde se recibiran los datos de tipo numericas
  Diversion:number = 0;
  Comida:number = 0;
  Salud:number = 0;
  Hogar:number = 0;
  Otro:number = 0;


  constructor(private APIphp: CtrlGastosServiceService, private cookie: CookieService, private ruteador:Router) { }

  ngOnInit(){
    this.NombreUser = this.cookie.get("NombreUser");  
    console.log(this.NombreUser);
    //se obtienen los datos numeros de las clasificaciones
    this.obtenerNumCla(this.NombreUser);
    
  }
    
obtenerNumCla(user:string){
  this.APIphp.NumDatoclasi(this.NombreUser).subscribe(datos =>{        
    if((datos['resultado'] == 'OK')) {  
      this.Diversion = datos['diver'];
      this.Comida = datos['comida'];
      this.Salud = datos['salud'];
      this.Hogar = datos['hogar'];
      this.Otro = datos['otro'];
    }
  });  
}

  GenerarGrafo(){    
    this.chart = new Chart('canvas',{
      type: 'bar',
      data:{
        labels: ['Diversion', 'Comida', 'Salud', 'Hogar','Otro'],
        datasets:[{
          label: 'Numero de gastos por Categoria: ',
          data:[this.Diversion,this.Comida,this.Salud,this.Hogar,this.Otro],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'            
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'        
        ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
    });

  }

}
