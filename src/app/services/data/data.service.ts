import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrintTicketData } from 'src/app/models/printTicketData';

@Injectable({
  providedIn: 'root'

})
export class DataService {
  private formData: PrintTicketData | null = null;
  private apiUrl = 'https://tu-backend.com/api/tickets'; // cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  setData(ticket: PrintTicketData) {
    this.formData = ticket;
  }

  getData(): PrintTicketData | null {
    return this.formData;
  }

  clearData() {
    this.formData = null;
  }

  saveToBackend(ticket: PrintTicketData): Observable<any> {
    return this.http.post(this.apiUrl, ticket);
  }

  saveToBackEnd(): Observable<any> {
    if (!this.formData) {
      throw new Error('No hay datos para guardar');
    }
    // Aquí reemplazas con tu endpoint real
    return this.http.post('https://tu-backend.com/api/despachos', this.formData);
  }
}