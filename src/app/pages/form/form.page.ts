import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CombustibleType, PrintTicketData } from 'src/app/models/printTicketData';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule]
})
export class FormPage {

  // formData: PrintTicketData = {
  //   vale: '',
  //   //fecha: new Date().toLocaleString(), //para versiones futuras
  //   placa: '',
  //   piloto: '',
  //   viaje: '',
  //   galones: 0,
  //   combustible: { id: 0, nombre: '' },
  // };

  form!: FormGroup;

  combustibles: CombustibleType[] = [
    { id: 1, nombre: 'Gasolina' },
    { id: 2, nombre: 'Diésel' },
  ];

  constructor(private router: Router,
              private dataService: DataService,
              private navCtrl: NavController,
              private fb: FormBuilder,) {}

              
  save() {
    if (this.form.valid) {
      const formData : PrintTicketData  = this.form.value;
      this.dataService.setData(formData);
      this.router.navigate(['/preview']);      
    }
  }

  // onSubmit() {
  //   if (this.form.valid) {
  //     const ticket: PrintTicketData = this.form.value;
  //     this.dataService.setData(ticket);
  //     this.dataService.saveToBackend(ticket).subscribe(() => {
  //       this.navCtrl.navigateForward('/preview');
  //     });
  //   }
  // }

  ngOnInit() {
    this.form = this.fb.group({
      vale: ['', Validators.required],
      placa: ['', Validators.required],
      piloto: ['', Validators.required],
      viaje: ['', Validators.required],
      galones: [0, [Validators.required, Validators.min(1)]],
      combustible: [null, Validators.required],
    });
  }

}
