import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  jugador1 = [];

  constructor( ) {

  }
  enviar(nombre, apellido, ciudad, cosa, fof) {
    this.jugador1.push({
          nombre,
          apellido,
          ciudad,
          cosa,
          fof
    });
    console.log(this.jugador1);
    // this.renderer.setAttribute(this.nombre.nativeElement, 'disabled', 'true'); // bloquear campos
    // Resetear campos vacíos
  }
}
