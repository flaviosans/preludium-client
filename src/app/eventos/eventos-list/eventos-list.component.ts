import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {
  
  eventos: Evento[];
  @Output() menuEmitido = new EventEmitter();
  @Output() eventoSelecionado = new EventEmitter();
  @Output() eventoExcluido = new EventEmitter();

  constructor(private eventoService: EventoService) { }

  ngOnInit(){
    // this.eventoService.obterEventos().subscribe(e => {
    //   this.eventos = e;
    // });
    // this.menuEmitido.emit([
    //   {link: '/eventos/novo', nome: 'Novo evento'}
    // ]);
    this.eventoService.obterEventos().pipe(first()).subscribe( e => {
      this.eventos = e;
    });
  }

  selecionar(evento: Evento) : void {
    this.eventoSelecionado.emit(evento);
  }
  
  excluir(evento: Evento): void{
    this.eventoService.excluirEvento(evento).subscribe(e => {
      this.removeEventoDaLista(evento);
    });
  }

  removeEventoDaLista(evento: Evento): void{
    var index = this.eventos.indexOf(evento);
    this.eventos.splice(index, 1);
  }
}
