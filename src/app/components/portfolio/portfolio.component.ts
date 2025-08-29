import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from 'src/app/_models/Projects';
import { Tag } from 'src/app/_models/Tag';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: false
})
export class PortfolioComponent implements OnInit{

  projects = {} as project[]
  isCollapsed: boolean = true
  typescript: boolean = false
  angular: boolean = false
  filtering: boolean = false
  

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle(' Myypu - Portfolio ')
  }

  ngOnInit(): void {
      this.projects = this.projectsService.getProjects();
  }

  filter(){
    let filterTags: Tag[] = []

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }

    if (this.angular || this.typescript) {
      this.filtering = true
    }else{
      this.filtering = false
    }

    this.projects = this.projectsService.getProjectsByFilter(filterTags)
  }

  resetFilters(){
    this.typescript = false
    this.angular = false

    this.filtering = false

    this.projects = this.projectsService.getProjects()
  }
  
}
