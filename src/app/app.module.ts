import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JugadorComponent } from './component/jugador/jugador.component';
import { AdminComponent } from './component/admin/admin.component';
import { JuegoService } from './services/juego.service';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
