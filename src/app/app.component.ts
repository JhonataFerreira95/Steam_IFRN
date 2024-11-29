
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsComponent } from './forms/forms.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BodyComponent, FormsComponent], // Importe os componentes standalone aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'steam-api-project';
}