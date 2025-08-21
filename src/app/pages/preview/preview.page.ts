import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage {

  data: any;

  constructor(private router: Router, private printService: PrintService) {
    const nav = this.router.getCurrentNavigation();
    this.data = nav?.extras.state?.['data'] || {};
  }

  // print() {
  //   this.printService.printText(`
  //     *** PREVIEW TICKET ***
  //     Nombre: ${this.data.nombre}
  //     Producto: ${this.data.producto}
  //     Cantidad: ${this.data.cantidad}
  //     --------------------------
  //     ¡Gracias!
  //   `);
  // }

  print() {
    this.printService.print(this.data);
  }

}
