import { Injectable } from '@angular/core';
import { project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: project[] = [
    {
      id: 0,
      name: 'Plataforma de Gestión y Agendamiento de citas',
      summary: 'Aplicación web moderna que conecta clientes y profesionales, con funcionalidades de registro, perfiles, búsqueda, agendamiento y administración. Desarrollada con un stack escalable y un diseño atractivo.',
      description: 'Este proyecto es una plataforma completa que permite a clientes y profesionales interactuar de forma eficiente. En el frontend, desarrollado en Angular con Angular Material y TailwindCSS, se implementa un diseño moderno y modular con vistas diferenciadas para usuarios públicos, clientes y negocios. Incluye sistema de autenticación con login, registro, guards de seguridad, layout dinámico con header, sidebar y footer, y CRUD de citas. ',
      repoLink: 'https://github.com/tu-usuario/tu-repositorio-1',
      pictures: ["assets/carrousel/3.png", "assets/carrousel/4.png", "assets/carrousel/5.png"],
      tags: [Tag.PYTHON, Tag.TYPESCRIPT]
    },
    {
      id: 1,
      name: 'Sistema de Gestión de Inventarios',
      summary: 'Aplicación web moderna para gestionar inventarios, ventas y análisis con IA. Ofrece un frontend intuitivo con Angular Material y un backend robusto con NestJS y PostgreSQL.',
      description: 'Este proyecto es una aplicación web completa enfocada en la gestión de inventarios y ventas, con un módulo adicional de análisis inteligente. En el frontend, desarrollado con Angular, Angular Material y CSS/Tailwind, los usuarios disponen de una interfaz responsiva y moderna que incluye una navbar lateral fija, tablas interactivas para productos, formularios flotantes para alta/edición de ítems y cards visuales para mostrar alertas generadas por IA. ',
      repoLink: 'https://github.com/tu-usuario/tu-repositorio-2',
      pictures: ["assets/carrousel/3.png", "assets/carrousel/4.png", "assets/carrousel/5.png"],
      tags: [Tag.ANGULAR, Tag.PYTHON]
    },
  ]


  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): project {
    let project = this.projects.find(project => project.id = id);

    if (project === undefined) {
      throw new TypeError('No id Match' + id)
    }
    return project
  }

  getProjectsByFilter(filterTag: Tag[]) {
    let filterProjects: project[] = []

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTag.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false
        }

      })
      if (foundAll) {
        filterProjects.push(project)
      }
    })

    return filterProjects
  }
}
