import { Component } from '@angular/core';
import { PrintService } from '../services/print/print.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // Add any necessary imports here, such as Ionic components
})
export class HomePage {
  constructor(public print: PrintService) {}
}
