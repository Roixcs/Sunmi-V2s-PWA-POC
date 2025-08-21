import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'app-preview',
  standalone: true,
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
  imports: [CommonModule, IonicModule] // Add any necessary imports here, such as Ionic components
})
export class PreviewPage implements OnInit {

  data: any;

  constructor(private dataService: DataService, private printService: PrintService) {}

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

  ngOnInit() {
    this.data = this.dataService.getData();
    if (!this.data) {
      this.data = {
        nombre: 'No data',
        producto: 'No data',
        cantidad: 'No data'
      };
      console.warn('No hay datos en el servicio');
    }
  }

}
