import { Injectable } from '@angular/core';
import { PrintElement } from 'src/app/models/printElement';
import { PrintTicketData } from 'src/app/models/printTicketData';

@Injectable({
  providedIn: 'root'
})
export class FormFormatter {
  static formatTicket(data: PrintTicketData): string {
    return `
      <C> CBC Logística </C>
      <C>-----------------------</C>
      <L>BOLETA DE CONTROL</L>
      <L>DE COMBUSTIBLE</L>
      
      Vale No: ${data.vale}
      Placa Vehículo: ${data.placa}
      Piloto: ${data.piloto}
      
      <B> Combustible: ${data.combustible.nombre}</B>
      Galones: ${data.galones}
      
      <C>-----------------------</C>
      <C> ¡Gracias! </C>
    `;
  }

  static format(data: Record<string, any>): PrintElement[] {
    const output: PrintElement[] = [];

    output.push({
      text: '--- REGISTRO DE FORMULARIO ---',
      bold: true,
      align: 'CENTER',
      size: 36,
      lineBreak: true,
    });

    Object.keys(data).forEach((key) => {
      const label = key.toUpperCase();
      const value = data[key] ?? '';

      output.push({
        text: `${label}: `,
        bold: true,
        align: 'LEFT',
      });

      output.push({
        text: `${value}`,
        align: 'LEFT',
        lineBreak: true,
      });
    });

    output.push({
      text: '--- FIN DEL REGISTRO ---',
      bold: true,
      align: 'CENTER',
      size: 24,
      lineBreak: true,
    });

    return output;
  }

  /**
   * Convierte los elementos a texto plano para fallback en Web
   */
  static toPlainText(elements: PrintElement[]): string {
    return elements.map((e) => e.text).join('\n');
  }
}
