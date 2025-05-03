import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './features/admin/admin.module';
import { BookingModule } from './features/booking/booking.module';
import { HomeModule } from './features/home/home.module';
import { MovieModule } from './features/movie/movie.module';
import { SeatSelectorComponent } from './shared/seat-selector/seat-selector.component';
import { SharedModule } from './shared/shared.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor.ts.interceptor';

@NgModule({
  declarations: [AppComponent, SeatSelectorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    MovieModule,
    BookingModule,
    AdminModule,
    SharedModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // ثبت Interceptor
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
