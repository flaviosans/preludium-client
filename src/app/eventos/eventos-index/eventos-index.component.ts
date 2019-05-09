import { Component, OnInit } from '@angular/core';
import { Evento } from '../../interfaces/evento';

@Component({
  selector: 'app-eventos-index',
  templateUrl: './eventos-index.component.html',
  styleUrls: ['./eventos-index.component.css']
})
export class EventosIndexComponent implements OnInit {
  evento: Evento;
  q: string;
  hoje: Date = new Date();
  proximosEventos: number;
  eventosAnteriores: number;

  constructor() { }

  ngOnInit(){ }

  editar(evento: Evento): void{
    this.evento = evento;
  }

  pesquisar(q: string): void {
    this.q = q;
  }

  atualizar(){
    this.evento = <Evento>{};
    this.pesquisar('');
  }

  eventoExiste(): boolean{
    return !!this.evento && !!this.evento.id;
  }
}
