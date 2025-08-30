import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
  })
  
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle(' Myypu - Contact ')
  }


  onSubmit() {
    if(this.contactForm.invalid){
      console.log("Faltan campos por llenar")
    }else{
      console.log(this.contactForm.value);
    }
    
  }

    redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
