import { Component, OnInit, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styles: []
})
export class JugadorComponent implements OnInit {
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('apellido') apellido: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;
  @ViewChild('cosa') cosa: ElementRef;
  @ViewChild('fof') fof: ElementRef;
  @ViewChild('nombre2') nombre2: ElementRef;
  @ViewChild('apellido2') apellido2: ElementRef;
  @ViewChild('ciudad2') ciudad2: ElementRef;
  @ViewChild('cosa2') cosa2: ElementRef;
  @ViewChild('fof2') fof2: ElementRef;

  constructor( private renderer: Renderer2,
               public juegoservice: JuegoService ) { }

  ngOnInit() {
  }
  limpiar(id, nombre, apellido, ciudad, cosa, fof) {
    if (id === 'J1') {
      this.renderer.setProperty(this.nombre.nativeElement, 'value', '');
      this.renderer.setProperty(this.apellido.nativeElement, 'value', '');
      this.renderer.setProperty(this.ciudad.nativeElement, 'value', '');
      this.renderer.setProperty(this.cosa.nativeElement, 'value', '');
      this.renderer.setProperty(this.fof.nativeElement, 'value', '');
      this.juegoservice.verificar(nombre, apellido, ciudad, cosa, fof);
     } else {
      this.renderer.setProperty(this.nombre2.nativeElement, 'value', '');
      this.renderer.setProperty(this.apellido2.nativeElement, 'value', '');
      this.renderer.setProperty(this.ciudad2.nativeElement, 'value', '');
      this.renderer.setProperty(this.cosa2.nativeElement, 'value', '');
      this.renderer.setProperty(this.fof2.nativeElement, 'value', '');
      this.juegoservice.verificar2(nombre, apellido, ciudad, cosa, fof);
     }
  }

  btnParo(id) {
    if (id === 'J2') {
      this.renderer.setAttribute(this.nombre.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.apellido.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.ciudad.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.cosa.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.fof.nativeElement, 'disabled', 'true'); // bloquear campos
    } else {
      this.renderer.setAttribute(this.nombre2.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.apellido2.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.ciudad2.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.cosa2.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.fof2.nativeElement, 'disabled', 'true'); // bloquear campos
    }
  }

}
