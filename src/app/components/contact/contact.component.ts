import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    asunto: ['', [Validators.required]],
    mensaje: ['', [Validators.required]]
  })

  constructor(private titleService: Title, private router: Router) {
  }


  onSubmit() {
    if (this.contactForm.invalid) {
      alert('Faltan campos por completar')
      return
    } else {
      const serviceID = 'service_dcgw4ho';
      const templateID = 'template_pyourbs';
      const publicKey = 'tpuuH8rKIfPgFhsdc';

      emailjs.send(serviceID, templateID, this.contactForm.value, publicKey)
        .then((response: EmailJSResponseStatus) => {
          console.log('Correo enviado con éxito!', response.status, response.text);
          alert('Tu mensaje fue enviado correctamente 🚀');
          this.contactForm.reset();
        })
        .catch((err) => {
          console.error('Error al enviar:', err);
          alert('Hubo un error al enviar tu mensaje');
        });
    }
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
