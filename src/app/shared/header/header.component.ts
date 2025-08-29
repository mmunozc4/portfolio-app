import { Component } from '@angular/core';
import { mypuData } from 'src/assets/contenidoPagina';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent {
  bannerData = mypuData.banner
}
