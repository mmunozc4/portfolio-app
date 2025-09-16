import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { mypuData } from 'src/assets/contenidoPagina';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  standalone: false
})
export class ResumeComponent {
  data = mypuData.resumen;

  constructor(private titleService: Title) {
  }

}
