import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  @ViewChild('nomb') nomb: ElementRef;
  nombre = 'n';
  apellido = 'a';
  ciudad = 'c';
  cosa = 'co';
  fof = 'fof';
  vN;
  vA;
  vC;
  vCosa;
  vFof;
  v1;
  v2;


  constructor( public js: JuegoService, private elRef: ElementRef,
               private renderer: Renderer2 ) { }

  ngOnInit() {
  }

  eliminarNom( ) {
    this.nombre = '';
  }
  eliminarape( ) {
    this.apellido = '';
  }
  eliminarciu( ) {
    this.ciudad = '';
  }
  eliminarcosa( ) {
    this.cosa = '';
  }
  eliminarfof( ) {
    this.fof = '';
  }

  eliminarNom2( ) {
    this.nombre = '';
  }
  eliminarape2( ) {
    this.apellido = '';
  }
  eliminarciu2( ) {
    this.ciudad = '';
  }
  eliminarcosa2( ) {
    this.cosa = '';
  }
  eliminarfof2( ) {
    this.fof = '';
  }

  verificado1( nom, ape, ciu, cosa, fof) {
    if ( this.nombre === '' ) {
      nom = this.nombre;
    }
    if (this.apellido === '') {
      ape = this.apellido;
    }
    if (this.ciudad === '') {
      ciu = this.ciudad;
    }
    if (this.cosa === '') {
      cosa = this.cosa;
    }
    if (this.fof === '') {
      fof = this.fof;
    }
    const vN = this.js.ValidarNombre1('J1', nom);
    const vA = this.js.ValidarApellido1('J1', ape);
    const vC = this.js.ValidarCiudad1('J1', ciu);
    const vCosa = this.js.ValidarCosa1('J1', cosa);
    const vFof = this.js.ValidarFof1('J1', fof);
    if ( vN[1] ) {
      nom = vN[0];
      this.vN = vN[1];
    } else {
      this.vN = vN;
    }
    if ( vA[1] ) {
      ape = vA[0];
      this.vA = vA[1];
    } else {
      this.vA = vA;
    }
    if ( vC[1] ) {
      ciu = vC[0];
      this.vC = vC[1];
    } else {
      this.vC = vC;
    }
    if ( vCosa[1] ) {
      cosa = vCosa[0];
      this.vCosa = vCosa[1];
    } else {
      this.vCosa = vCosa;
    }
    if ( vFof[1] ) {
      fof = vFof[0];
      this.vFof = vFof[1];
    } else {
      this.vFof = vFof;
    }
    this.js.J1Validado.push({
      nom,
      ape,
      ciu,
      cosa,
      fof
    });
    this.validar('J1', nom, ape, ciu, cosa, fof);
  }
  verificado2( nom, ape, ciu, cosa, fof) {
    if ( this.nombre === '' ) {
      nom = this.nombre;
      this.vN = 0;
    }
    if (this.apellido === '') {
      ape = this.apellido;
      this.vA = 0;
    }
    if (this.ciudad === '') {
      ciu = this.ciudad;
      this.vC = 0;
    }
    if (this.cosa === '') {
      cosa = this.cosa;
      this.vCosa = 0;
    }
    if (this.fof === '') {
      fof = this.fof;
      this.vFof = 0;
    }
    const vN = this.js.ValidarNombre1('J2', nom);
    const vA = this.js.ValidarApellido1('J2', ape);
    const vC = this.js.ValidarCiudad1('J2', ciu);
    const vCosa = this.js.ValidarCosa1('J2', cosa);
    const vFof = this.js.ValidarFof1('J2', fof);
    if ( vN[1] ) {
      nom = vN[0];
      this.vN = vN[1];
    } else {
      this.vN = vN;
    }
    if ( vA[1] ) {
      ape = vA[0];
      this.vA = vA[1];
    } else {
      this.vA = vA;
    }
    if ( vC[1] ) {
      ciu = vC[0];
      this.vC = vC[1];
    } else {
      this.vC = vC;
    }
    if ( vCosa[1] ) {
      cosa = vCosa[0];
      this.vCosa = vCosa[1];
    } else {
      this.vCosa = vCosa;
    }
    if ( vFof[1] ) {
      fof = vFof[0];
      this.vFof = vFof[1];
    } else {
      this.vFof = vFof;
    }
    console.log(nom, ape, ciu, cosa, fof, this.vN, this.vA, this.vC, this.vCosa, this.vFof);
    this.js.J2Validado.push({
      nom,
      ape,
      ciu,
      cosa,
      fof
    });
  }
  validar(id, nom, ape, ciu, cosa, fof) {
    if (id === 'J1') {
      const vN = this.js.ValidarNombre1('J1VsJ2', nom);
      const vA = this.js.ValidarApellido1('J1VsJ2', ape);
      const vC = this.js.ValidarCiudad1('J1VsJ2', ciu);
      const vCosa = this.js.ValidarCosa1('J1VsJ2', cosa);
      const vFof = this.js.ValidarFof1('J1VsJ2', fof);
      if ( vN[1] ) {
        nom = vN[0];
        this.vN = vN[1];
      } else {
        this.vN = vN;
      }
      if ( vA[1] ) {
        ape = vA[0];
        this.vA = vA[1];
      } else {
        this.vA = vA;
      }
      if ( vC[1] ) {
        ciu = vC[0];
        this.vC = vC[1];
      } else {
        this.vC = vC;
      }
      if ( vCosa[1] ) {
        cosa = vCosa[0];
        this.vCosa = vCosa[1];
      } else {
        this.vCosa = vCosa;
      }
      if ( vFof[1] ) {
        fof = vFof[0];
        this.vFof = vFof[1];
      } else {
        this.vFof = vFof;
      }
      return 1;
    }
    // const Nombre = this.js.jugador1.find(element => element.nombre === 'Irving');
    // console.log(Nombre);
    if (id === 'J2') {
      const vN = this.js.ValidarNombre1('J2VsJ1', nom);
      const vA = this.js.ValidarApellido1('J2VsJ1', ape);
      const vC = this.js.ValidarCiudad1('J2VsJ1', ciu);
      const vCosa = this.js.ValidarCosa1('J2VsJ1', cosa);
      const vFof = this.js.ValidarFof1('J2VsJ1', fof);
      if ( vN[1] ) {
        nom = vN[0];
        this.vN = vN[1];
      } else {
        this.vN = vN;
      }
      if ( vA[1] ) {
        ape = vA[0];
        this.vA = vA[1];
      } else {
        this.vA = vA;
      }
      if ( vC[1] ) {
        ciu = vC[0];
        this.vC = vC[1];
      } else {
        this.vC = vC;
      }
      if ( vCosa[1] ) {
        cosa = vCosa[0];
        this.vCosa = vCosa[1];
      } else {
        this.vCosa = vCosa;
      }
      if ( vFof[1] ) {
        fof = vFof[0];
        this.vFof = vFof[1];
      } else {
        this.vFof = vFof;
      }
      return 2;
    }
  }
}
