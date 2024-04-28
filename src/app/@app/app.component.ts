import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from "../@shared/header/header.component";
import { HomepageComponent } from "../homepage/homepage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, HomepageComponent]
})
export class AppComponent {
  title = 'lerka-personal';

  ngOnInit(): void {
    initFlowbite();
  }
}
