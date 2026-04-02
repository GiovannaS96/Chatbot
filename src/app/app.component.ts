import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App-chat';
}
