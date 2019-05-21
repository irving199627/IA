import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  J1 = false;
  J2 = false;
  admin = false;
  letra;
  jugador2 = [];
  jugador1 = [{
      nombre: 'Irving',
      apellido: 'I',
      ciudad: 'Inglaterra',
      cosa: 'Iman',
      fof: null,
      puntsN: '1',
      puntsA: '2',
      puntsC: '3',
      puntsCosa: '4',
      puntsFof: '5'
    }, {
      nombre: 'Ignacio',
      apellido: 'Iw',
      ciudad: 'Ia',
      cosa: 'Im',
      fof: null
  }];
  verifica1 = [];
  verifica2 = [];
  J1Validado = []; // temporales para verificar si no se puso la misma letra entre jugadores
  J2Validado = []; // temporales para verificar si no se puso la misma letra entre jugadores
  diccionario = [];
  constructor( ) {

  }
  almacenar1(id, nombre, apellido, ciudad, cosa, fof, puntsN, puntsA, puntsC, puntsCosa, puntsFof) {
    if (id === 'J1') {
      this.jugador1.push({
        nombre,
        apellido,
        ciudad,
        cosa,
        fof,
        puntsN,
        puntsA,
        puntsC,
        puntsCosa,
        puntsFof
  });
    } else {
      this.jugador2.push({
        nombre,
        apellido,
        ciudad,
        cosa,
        fof,
        puntsN,
        puntsA,
        puntsC,
        puntsCosa,
        puntsFof
  });
    }
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

  verificar2(nombre, apellido, ciudad, cosa, fof) {
    this.verifica2.push({
          nombre,
          apellido,
          ciudad,
          cosa,
          fof
    });
    console.log(this.verifica2);
  }

  generarLetra() {
   const aLetras = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

   this.letra = aLetras[Math.floor(Math.random() * aLetras.length)];
  }
  ValidarNombre1(id, nombre) {
    if (id === 'J1') {
      const Nombre = this.jugador1.find(element => element.nombre === nombre);
      if (Nombre) {
        return 50;
      } else {
        return [nombre, 100];
    }
    }
    if (id === 'J2') {
      const Nombre = this.jugador2.find(element => element.nombre === nombre);
      if (Nombre) {
        return 50;
      } else {
        return [nombre, 100];
    }
    }
    if (id === 'J1vsJ2') {
      const Nombre = this.J2Validado.find(element => element.nombre === nombre);
      if (Nombre) {
        return 50;
      } else {
        return [nombre, 100];
      }
    }
    if (id === 'J2vsJ1') {
      const Nombre = this.J1Validado.find(element => element.nombre === nombre);
      if (Nombre) {
        return 50;
      } else {
        return [nombre, 100];
      }
    }
  }
  ValidarApellido1(id, ape) {
    if (id === 'J1') {
      const Nombre = this.jugador1.find(element => element.apellido === ape);
      if (Nombre) {
        return 50;
      } else {
        return [ape, 100];
    }
    }
    if (id === 'J2') {
        const Nombre = this.jugador2.find(element => element.apellido === ape);
        if (Nombre) {
          return 50;
        } else {
          return [ape, 100];
      }
    }
    if (id === 'J1vsJ2') {
      const Nombre = this.J2Validado.find(element => element.ape === ape);
      if (Nombre) {
        return 50;
      } else {
        return [ape, 100];
      }
    }
    if (id === 'J2vsJ1') {
      const Nombre = this.J1Validado.find(element => element.ape === ape);
      if (Nombre) {
        return 50;
      } else {
        return [ape, 100];
      }
    }

  }

  ValidarCiudad1(id, ciu) {
    if (id === 'J1') {
      const Nombre = this.jugador1.find(element => element.ciudad === ciu);
      if (Nombre) {
        return 50;
      } else {
        return [ciu, 100];
      }
    }
    if (id === 'J2') {
      const Nombre = this.jugador2.find(element => element.ciudad === ciu);
      if (Nombre) {
        return 50;
      } else {
        return [ciu, 100];
    }
    }
    if (id === 'J1vsJ2') {
      const Nombre = this.J2Validado.find(element => element.ciu === ciu);
      if (Nombre) {
        return 50;
      } else {
        return [ciu, 100];
      }
    }
    if (id === 'J2vsJ1') {
      const Nombre = this.J1Validado.find(element => element.ciu === ciu);
      if (Nombre) {
        return 50;
      } else {
        return [ciu, 100];
      }
    }

  }
  ValidarCosa1(id, cosa) {
    if (id === 'J1') {
      const Nombre = this.jugador1.find(element => element.cosa === cosa);
      if (Nombre) {
        return 50;
      } else {
        return [cosa, 100];
      }
    }
    if (id === 'J2') {
      const Nombre = this.jugador2.find(element => element.cosa === cosa);
      if (Nombre) {
        return 50;
      } else {
        return [cosa, 100];
      }
    }
    if (id === 'J1vsJ2') {
      const Nombre = this.J2Validado.find(element => element.cosa === cosa);
      if (Nombre) {
        return 50;
      } else {
        return [cosa, 100];
      }
    }
    if (id === 'J2vsJ1') {
      const Nombre = this.J1Validado.find(element => element.cosa === cosa);
      if (Nombre) {
        return 50;
      } else {
        return [cosa, 100];
      }
    }

  }
  ValidarFof1(id, fof) {
    if (id === 'J1') {
      const Nombre = this.jugador1.find(element => element.fof === fof);
      if (Nombre) {
        return 50;
      } else {
        return [fof, 100];
      }
    }
    if (id === 'J2') {
      const Nombre = this.jugador2.find(element => element.fof === fof);
      if (Nombre) {
        return 50;
      } else {
        return [fof, 100];
      }
    }
    if (id === 'J1vsJ2') {
      const Nombre = this.J2Validado.find(element => element.fof === fof);
      if (Nombre) {
        return 50;
      } else {
        return [fof, 100];
      }
    }
    if (id === 'J2vsJ1') {
      const Nombre = this.J1Validado.find(element => element.fof === fof);
      if (Nombre) {
        return 50;
      } else {
        return [fof, 100];
      }
    }
  }
}
