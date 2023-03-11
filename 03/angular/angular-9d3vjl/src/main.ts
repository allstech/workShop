import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>{{name}}</h1>
    <ul class="cards">
      <li
        class="cards_item"
        *ngFor="let character of characters"
        [style]="{'background-image':'url('+character.image+')'}"
      >
        <h3>{{character.name}}</h3>
      </li>
    </ul>
  `,
  styles: [
    `
    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .cards_item {
      flex-basis: calc(25% - 15px);
      aspect-ratio: 0.9;
      border-radius: 8px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      color: white;
      text-shadow: 0px 0px 3px black;
    }
  `,
  ],
})
export class App implements OnInit {
  name = 'Rick & Morty';
  apiURL = 'https://rickandmortyapi.com/api/character';
  characters = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.apiURL).subscribe((res: any) => {
      this.characters = res.results;
    });
  }
}

bootstrapApplication(App);
