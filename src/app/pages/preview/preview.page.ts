import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController, Platform } from '@ionic/angular';
import { PrintTicketData } from 'src/app/models/printTicketData';
import { DataService } from 'src/app/services/data/data.service';
import { FormFormatter } from 'src/app/services/formatter/form-formatter';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'app-preview',
  standalone: true,
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
  imports: [CommonModule, IonicModule] // Add any necessary imports here, such as Ionic components
})
export class PreviewPage implements OnInit {

  //data: any;
  ticket!: PrintTicketData;
  showRetryButton = false;
  isWeb = false;
  

  constructor(private dataService: DataService, 
              private printService: PrintService, 
              private navCtrl: NavController,
              private router: Router,
              private platform: Platform) {}

  ngOnInit() {
    const formData = this.dataService.getData();
    if (!formData) {
      //Tirar dialog de error y volver
      this.router.navigate(['/form']);
      return;
    }

    this.ticket = formData;
    this.isWeb = !this.platform.is('android'); // Detecta si es web
    
    if (!this.isWeb) {
      // Guardar en el backend y luego imprimir
      this.dataService.saveToBackEnd().subscribe(() => {
        const formattedData = FormFormatter.format(this.ticket);
        this.tryPrint(formattedData);
      });
    }
    
    // else {
    //   this.ticket = formData;
    //   this.dataService.saveToBackEnd().subscribe(() => {
    //     const formattedData = FormFormatter.format(this.ticket);
    //     if (this.platform.is('android')) {
    //       // En Android con impresora Sunmi
    //       this.printService.printTicket(formattedData);
    //     } else {
    //       // En Web
    //       console.log('Preview del ticket (modo web):', formattedData);
    //     }
    //     this.printService.printTicket(formattedData);
    //   });
    // }
  }


  tryPrint(formattedData: any) {
    try {
      this.printService.printTicket(formattedData);

      // Si en 10s no se reimprime, habilitamos el botón
      setTimeout(() => {
        this.showRetryButton = true;
      }, 10000);

    } catch (error) {
      console.error('Error al imprimir:', error);
      this.showRetryButton = true;
    }
  }

  retryPrint() {
    this.showRetryButton = false;
    const formattedData = FormFormatter.format(this.ticket);
    this.tryPrint(formattedData);
  }

  goBack() {
    this.router.navigate(['/form']);
  }

  // private formatTicket(ticket: PrintTicketData): any[] {
  //   return [
  //     { text: `Vale: ${ticket.vale}`, bold: true },
  //     { text: `Placa: ${ticket.placa}`, bold: true },
  //     { text: `Piloto: ${ticket.piloto}`, bold: true },
  //     { text: `Viaje: ${ticket.viaje}`, bold: true },
  //     { text: `Galones: ${ticket.galones}`, bold: true },
  //     { text: `Combustible: ${ticket.combustible.nombre}`, bold: true },
  //   ];
  // }

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

  // print() {
  //   this.printService.print(this.data);
  // }

  // async printTicket() {
  //   if (!this.ticket) return;
  //   const formatted = this.formatTicket(this.ticket);
  //   await SunmiPrinterPlugin.print({ content: formatted });
  //   await this.dataService.clearData();
  // }

  // formatTicket(data: PrintTicketData): PrintTicket {
  //   const lines: PrintLine[] = [
  //     { text: `Vale: ${data.vale}`, bold: true },
  //     { text: `Placa: ${data.placa}`, bold: true },
  //     { text: `Piloto: ${data.piloto}`, bold: true },
  //     { text: `Viaje: ${data.viaje}`, bold: true },
  //     { text: `Galones: ${data.galones}`, bold: true },
  //     { text: `Combustible: ${data.combustible.nombre}`, bold: true },
  //     { text: '-----------------------------', align: 'CENTER' },
  //     { text: '¡Gracias por su compra!', align: 'CENTER', bold: true, size: 'LARGE' }
  //   ];

  //   return { lines };
  // }

  // async imprimirTicket(data: PrintTicketData) {
  //   try {
  //     const { status } = await SunmiPrinterPlugin.getStatus();
  //     if (status !== 0) {
  //       console.warn('Impresora no lista. Código:', status);
  //       // igual podemos intentar imprimir o mostrar aviso
  //     }
  //     await SunmiPrinterPlugin.printTicket(data);
  //   } catch (e) {
  //     console.error('Error al imprimir:', e);
  //   }
  // }

  // async printTicket() {
  //   if (!this.ticket) return;

  //   const jsonToPrint = {
  //     vale: `Vale: ${this.ticket.vale}`,
  //     placa: `Placa: ${this.ticket.placa}`,
  //     piloto: `Piloto: ${this.ticket.piloto}`,
  //     viaje: `Viaje: ${this.ticket.viaje}`,
  //     galones: `Galones: ${this.ticket.galones}`,
  //     combustible: `Combustible: ${this.ticket.combustible?.nombre}`,
  //   };

  //   try {
  //     await SunmiPrinterPlugin.printJson({ data: JSON.stringify(jsonToPrint) });
  //   } catch (err) {
  //     console.error('Error al imprimir', err);
  //   }
  // }

  

}
