import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  isRouteActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

}
