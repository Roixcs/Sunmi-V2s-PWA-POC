import { Component } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(public print: PrintService) {}
}
