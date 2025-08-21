import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';

// declare global {
//   interface Window { SunmiPrinter?: any; }
// }

declare var sunmiPrinter: any; // SDK expuesto en runtime
@Injectable({
  providedIn: 'root'
})
export class PrintService {
  // private plugin = (window as any).SunmiPrinter;

  // private ensure() {
  //   if (!Capacitor.isNativePlatform()) {
  //     throw new Error('La impresión SUNMI solo funciona en Android nativo.');
  //   }
  //   if (!this.plugin) {
  //     this.plugin = (window as any).SunmiPrinter;
  //   }
  // }

  // async printDemo() {
  //   this.ensure();
  //   await this.plugin.printerInit();
  //   await this.plugin.setAlignment({ alignment: 1 }); // center
  //   await this.plugin.printText({ text: '=== SUNMI V2s ===\n', fontSize: 24, bold: true });
  //   await this.plugin.setAlignment({ alignment: 0 }); // left
  //   await this.plugin.printText({ text: 'Ticket de prueba\nFecha: ' + new Date().toLocaleString() + '\n\n' });
  //   await this.plugin.printQRCode({ data: 'https://mi-sitio/demo', modulesize: 6, errorlevel: 3 });
  //   await this.plugin.lineWrap({ lines: 3 });
  // }

  // print(content: string) {
  //   console.log('Enviando a impresora Sunmi...');
  //   console.log(content);
  // }

  print(data: any) {
    if (typeof sunmiPrinter === 'undefined') {
      console.log('⚠️ Sunmi SDK no disponible. Datos a imprimir:', data);
      return;
    }

    try {
      sunmiPrinter.printText(`\n*** Ticket ***\n`, 30, true, false);
      sunmiPrinter.printText(`Nombre: ${data.nombre}\n`, 24, false, false);
      sunmiPrinter.printText(`Producto: ${data.producto}\n`, 24, false, false);
      sunmiPrinter.printText(`Cantidad: ${data.cantidad}\n`, 24, false, false);
      sunmiPrinter.printText(`\n----------------\n`, 24, false, false);
      sunmiPrinter.printText(`Gracias por su compra!\n\n`, 28, true, false);
      sunmiPrinter.cutPaper(); // si el modelo soporta corte
    } catch (e) {
      console.error('Error al imprimir:', e);
    }
  }

}
