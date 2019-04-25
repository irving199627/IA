import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  constructor( public js: JuegoService) { }

  ngOnInit() {
  }

  eliminar( objeto ) {
    console.log(objeto);
  }
}
