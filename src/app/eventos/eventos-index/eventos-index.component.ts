import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-index',
  templateUrl: './eventos-index.component.html',
  styleUrls: ['./eventos-index.component.css']
})
export class EventosIndexComponent implements OnInit {
  evento: Evento;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  editar(evento: Evento): void{
    this.router.navigate(['/eventos/editar', evento.id]);
  }

  excluirDaLista(evento: Evento): void{

  }
}
