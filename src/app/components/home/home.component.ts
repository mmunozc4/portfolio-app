import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { project } from 'src/app/_models/Projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { mypuData } from 'src/assets/contenidoPagina';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  sobreNosotros = mypuData.sobre_nosotros;
  featuredProject = {} as project

  constructor(private titleService: Title, private projectsService: ProjectsService, private router: Router) {
    this.titleService.setTitle(' Myypu - Home ')
  }

  ngOnInit(): void {
    this.featuredProject = this.projectsService.getProjectById(2);
  }

  redirectTo() {
    this.router.navigate(['/portfolio']);
  }

}
