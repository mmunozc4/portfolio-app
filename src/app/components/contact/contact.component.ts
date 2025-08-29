import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { mypuData } from 'src/assets/contenidoPagina';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: false
})
export class ContactComponent {
  contactData = mypuData.contacto

  contactForm = {
    nombre: '',
    correo: '',
    subject: '',
    mensaje: ''
  };

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle(' Myypu - Contact ')
  }


  onSubmit() {
    console.log('Información del formulario enviada:', this.contactForm);
  }

    redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
