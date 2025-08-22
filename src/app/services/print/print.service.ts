import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
//import { SunmiPrinterPlugin } from 'capacitor-sunmi-printer'; // Asegúrate de instalar el plugin correctamente
//import { SunmiPrinterPlugin } from '@roixcs/capacitor-sunmi-printer';
import { SunmiPrinterPlugin } from '@roixcs/capacitor-sunmi-printer';

//declare var sunmiPrinter: any; // SDK expuesto en runtime
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

  // print(data: any) {
  //   if (typeof sunmiPrinter === 'undefined') {
  //     console.log('⚠️ Sunmi SDK no disponible. Datos a imprimir:', data);
  //     return;
  //   }

  //   try {
  //     sunmiPrinter.printText(`\n*** Ticket ***\n`, 30, true, false);
  //     sunmiPrinter.printText(`Nombre: ${data.nombre}\n`, 24, false, false);
  //     sunmiPrinter.printText(`Producto: ${data.producto}\n`, 24, false, false);
  //     sunmiPrinter.printText(`Cantidad: ${data.cantidad}\n`, 24, false, false);
  //     sunmiPrinter.printText(`\n----------------\n`, 24, false, false);
  //     sunmiPrinter.printText(`Gracias por su compra!\n\n`, 28, true, false);
  //     sunmiPrinter.cutPaper(); // si el modelo soporta corte
  //   } catch (e) {
  //     console.error('Error al imprimir:', e);
  //   }
  // }

  async print(data: any) {
    const isAndroid = Capacitor.getPlatform() === 'android';
  
    try {
      if (isAndroid && SunmiPrinterPlugin) {
        const status = await SunmiPrinterPlugin.getStatus();
  
        if (status && status.status === 0) {
          await SunmiPrinterPlugin.printText({
            // content: `\n*** Ticket ***\n` +
            //          `Nombre: ${data?.nombre ?? ''}\n` +
            //          `Producto: ${data?.producto ?? ''}\n` +
            //          `Cantidad: ${data?.cantidad ?? ''}\n` +
            //          `\n----------------\n` +
            //          `Gracias por su compra!\n\n`,
            text: data?.nombre ?? '',
            align: 0, // left
            fontSize: 24, // tamaño normal
            bold: 0 // normal
          });
  
          console.log('Ticket impreso en Sunmi');
        } else {
          console.warn('Impresora no lista. Código:', status?.status);
        }
      } else {
        console.log('Vista previa ticket (web):', data);
      }
    } catch (e) {
      console.error('Error al imprimir:', e);
    }
  }

  async testPrint() {
    const status = await SunmiPrinterPlugin.getStatus();
    console.log('Printer status:', status);
  
    await SunmiPrinterPlugin.printText({
      text: '¡Prueba!',
      align: 1,       // center
      fontSize: 28,   // tamaño grande
      bold: 1         // negrita
    });
  }
  

}
