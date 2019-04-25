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

  constructor( private renderer: Renderer2,
               public juegoservice: JuegoService ) { }

  ngOnInit() {
  }
  limpiar(nombre, apellido, ciudad, cosa, fof) {
    this.renderer.setProperty(this.nombre.nativeElement, 'value', '');
    this.renderer.setProperty(this.apellido.nativeElement, 'value', '');
    this.renderer.setProperty(this.ciudad.nativeElement, 'value', '');
    this.renderer.setProperty(this.cosa.nativeElement, 'value', '');
    this.renderer.setProperty(this.fof.nativeElement, 'value', '');

    this.juegoservice.verificar(nombre, apellido, ciudad, cosa, fof);
    console.log(this.nombre);
  }

}
