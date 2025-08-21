import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {

  formData = {
    nombre: '',
    producto: '',
    cantidad: ''
  };

  constructor(private router: Router) {}

  save() {
    this.router.navigate(['/preview'], {
      state: { data: this.formData }
    });
  }

}
