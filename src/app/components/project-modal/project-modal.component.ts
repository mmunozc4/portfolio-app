import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { project } from 'src/app/_models/Projects';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  standalone: false
})
export class ProjectModalComponent {

  project = {} as project

  constructor(public bsModalRef: BsModalRef){}



}
