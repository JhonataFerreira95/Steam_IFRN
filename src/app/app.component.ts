
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsComponent } from './forms/forms.component'; 

@Component({
  selector: 'app-root',
  standalone: true,  // Marque o componente como standalone
  imports: [FormsComponent,HeaderComponent, FooterComponent],  // Adicione outros componentes aqui se necessário
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'steam-api-project';
}
export class AppModule { }
