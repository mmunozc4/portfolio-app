import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { project } from 'src/app/_models/Projects';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  standalone: false
})
export class ProjectCardComponent {

  @Input() project = {} as project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){}

  openProjectModal(){
    const mmodalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    }
    this.bsModalRef = this.modalService.show(ProjectModalComponent, mmodalOptions)
  }

}
