import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    MovieCardComponent,
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
  ],
  imports: [RouterLink, RouterOutlet],
  exports: [
    MovieCardComponent,
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
  ],
})
export class SharedModule {}
