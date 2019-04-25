import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  jugador2 = [];
  jugador1 = [{
      nombre: 'Irving',
      apellido: 'I',
      ciudad: 'Inglaterra',
      cosa: 'Iman',
      fof: null
    }, {
      nombre: 'Ignacio',
      apellido: 'Iw',
      ciudad: 'Ia',
      cosa: 'Im',
      fof: null
  }];
  verifica1 = [];
  diccionario = [];
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
    this.jugador2.forEach( a => {
      console.log(a);
    });
    // this.renderer.setAttribute(this.nombre.nativeElement, 'disabled', 'true'); // bloquear campos
    // Resetear campos vacíos
  }
  verificar(nombre, apellido, ciudad, cosa, fof) {
    this.verifica1.push({
          nombre,
          apellido,
          ciudad,
          cosa,
          fof
    });
    console.log(this.verifica1);
  }
}
