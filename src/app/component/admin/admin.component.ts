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
    this.js.almacenar1(nom, ape, ciu, cosa, fof);
  }
}
