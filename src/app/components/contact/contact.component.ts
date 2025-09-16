import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { mypuData } from 'src/assets/contenidoPagina';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: false
})
export class ContactComponent {
  contactData = mypuData.contacto;

  contactForm = {
    nombre: '',
    correo: '',
    subject: '',
    mensaje: ''
  };

  constructor(private titleService: Title, private router: Router) { }

  onSubmit() {
    console.log('Información del formulario enviada:', this.contactForm);

    const serviceID = 'service_dcgw4ho';   
    const templateID = 'template_pyourbs'; 
    const publicKey = 'tpuuH8rKIfPgFhsdc';     

    emailjs.send(serviceID, templateID, this.contactForm, publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('Correo enviado con éxito!', response.status, response.text);
        alert('Tu mensaje fue enviado correctamente 🚀');
        this.contactForm = { nombre: '', correo: '', subject: '', mensaje: '' };
      })
      .catch((err) => {
        console.error('Error al enviar:', err);
        alert('Hubo un error al enviar tu mensaje');
      });
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
