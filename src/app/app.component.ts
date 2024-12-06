
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsComponent } from './forms/forms.component'; 
import { FloatComponent } from './float/float.component';
import { ApiComponent } from './api/api.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Marque o componente como standalone
  imports: [FormsComponent,HeaderComponent, FooterComponent, FloatComponent, CommonModule, ApiComponent],  // Adicione outros componentes aqui se necessário
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'steam-api-project';
  perfil=true;
}
export class AppModule { }
