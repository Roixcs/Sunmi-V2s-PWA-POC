import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule] // Add any necessary imports here, such as Ionic components
})
export class FormPage {

  formData = {
    nombre: '',
    producto: '',
    cantidad: ''
  };

  constructor(private router: Router,
              private dataService: DataService) {}

  save() {
    this.dataService.setData(this.formData);
    this.router.navigate(['/preview']);
  }

}
