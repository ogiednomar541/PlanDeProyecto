import { Component, OnInit } from '@angular/core';

import { CtrlGastosServiceService } from '../ctrl-gastos-service.service';

@Component({
  selector: 'app-tucuenta',
  templateUrl: './tucuenta.component.html',
  styleUrls: ['./tucuenta.component.scss']
})
export class TucuentaComponent implements OnInit {

  Cuenta:any;
  filterPost = ''

  constructor( private cuentaService: CtrlGastosServiceService) { }

  ngOnInit(): void {
    this.cuentaService.obtenerCuenta().subscribe(respuesta=>{
      console.log(respuesta);
      this.Cuenta=respuesta;
    });
  }

}

