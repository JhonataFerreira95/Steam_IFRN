
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,  // Marque o componente como standalone
  imports: [HeaderComponent, FooterComponent,  CommonModule,  RouterOutlet],  // Adicione outros componentes aqui se necessário
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'steam-api-project';
  perfil=true;
}
export class AppModule { }
