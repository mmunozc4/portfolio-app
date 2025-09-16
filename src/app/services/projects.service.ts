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
      name: 'Gestor de citas',
      summary: 'Aplicación web para la gestión y agendamiento de citas, pensada para negocios que requieren organización práctica y control de clientes.',
      description: `Esta aplicación fue desarrollada con el objetivo de facilitar la gestión de citas para distintos tipos de negocios, ofreciendo una herramienta práctica y organizada. 
              La plataforma permite a las empresas registrar y almacenar la información de sus clientes, lo que agiliza la programación de futuras citas y contribuye a mantener un mayor control y orden en la atención.

              Es importante señalar que esta es una versión demo, por lo que algunas funcionalidades pueden encontrarse incompletas o en desarrollo. 
              Sin embargo, la aplicación es completamente adaptable a las necesidades de cada cliente, desde la implementación de nuevas características hasta la personalización del diseño y flujo de trabajo.`,
      repoLink: 'https://github.com/mmunozc4/appointmentsManager-app',
      appLink: 'https://mmunozc4.github.io/appointmentsManager-app/#/login',
      pictures: [
        "assets/carrousel/citas-1.png",
        "assets/carrousel/citas-2.png",
        "assets/carrousel/citas-3.png"
      ],
      tags: [Tag.ANGULAR, Tag.NODEJS, Tag.NODEJS, Tag.SQL]
    },
    {
      id: 1,
      name: 'Sistema de Inventario',
      summary: 'Aplicación para gestionar productos, registrar ventas y optimizar el control de inventario con reportes y estadísticas.',
      description: `Esta aplicación fue diseñada para apoyar a las empresas en la gestión de su inventario, brindando una herramienta intuitiva que permite organizar productos, registrar ventas y mantener un control eficiente de los recursos. 
              Su enfoque está orientado a optimizar procesos, reducir errores y facilitar la toma de decisiones a partir de la información registrada.

              Al tratarse de una versión demo, algunas funcionalidades pueden estar limitadas o en desarrollo. 
              No obstante, la aplicación es completamente adaptable, lo que permite personalizarla de acuerdo con las necesidades específicas de cada cliente, desde la incorporación de nuevas funciones hasta ajustes en la interfaz y el flujo de trabajo.`,
      repoLink: 'https://github.com/mmunozc4/Inventory-app.git',
      appLink: 'https://inventory-app-fronend.onrender.com/analysis',
      pictures: [
        "assets/carrousel/inventario-1.png",
        "assets/carrousel/inventario-2.png",
        "assets/carrousel/inventario-3.png"
      ],
      tags: [Tag.ANGULAR, Tag.NODEJS, Tag.PYTHON, Tag.POSTGRESQL]
    },
    {
      id: 2,
      name: 'Aplicación de Ecommerce',
        summary: 'Plataforma de comercio electrónico para la gestión de productos, ventas en línea y panel administrativo exclusivo para el administrador.',
      description: `Esta aplicación de Ecommerce fue desarrollada con el objetivo de ofrecer una plataforma intuitiva y eficiente para la gestión de productos y ventas en línea. 
          El diseño está pensado para brindar una experiencia de usuario fluida y moderna, permitiendo la navegación por categorías, visualización de productos y realización de compras.

          Es importante destacar que esta es una versión demo de la aplicación. En esta versión, algunas funcionalidades y detalles pueden no estar completamente implementados. 
          Además, aunque la aplicación ofrece una visión general del sistema, todas las características pueden ser modificadas y adaptadas a las necesidades específicas del cliente, desde la adición de nuevas funciones hasta la personalización del diseño. 
          El acceso al panel de administración está restringido solo al administrador de la plataforma, habilitando el botón de inicio de sesión exclusivamente para usuarios autorizados.`,
      repoLink: 'https://github.com/mmunozc4/ecommerce-app.git',
      appLink: 'https://ecommerce-app-mu-henna.vercel.app/#/shop/category-products',
      pictures: [
        "assets/carrousel/ecommerce-1.png",
        "assets/carrousel/ecommerce-2.png",
        "assets/carrousel/ecommerce-3.png"
      ],
      tags: [Tag.ANGULAR, Tag.NODEJS, Tag.NODEJS, Tag.SQL]
    }
  ];


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
