import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Evento } from '../../interfaces/evento';
import { EventoService } from '../../services/evento.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit, OnChanges {

  eventos: Evento[];
  @Input() tituloJanela: string;
  urlArgs;
  @Input() tempo: string;
  @Input() q: string;
  @Output() eventoSelecionado = new EventEmitter();
  @Output() eventoExcluido = new EventEmitter();
  @Output() listaCarregada = new EventEmitter();


  constructor(private eventoService: EventoService) { }

  ngOnInit(){
    this.urlArgs = [
        { prop: 'tempo', val: this.tempo }
    ];

    this.eventoService.obterEventos(this.urlArgs)
        .pipe(first()).subscribe( e => {
      this.eventos = e;
      this.listaCarregada.emit(e.length);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes['q'] !== 'undefined'){
      const change = changes['q'];
      if (!change.isFirstChange()){
        this.pesquisar(this.q);
      }
    }
  }

    selecionar(evento: Evento): void {
    this.eventoSelecionado.emit(evento);
  }

  pesquisar(q: string): void{
    this.eventoService.obterEventos([...this.urlArgs, {prop: 'q', val: q}]).subscribe( e => {
      this.eventos = e;
      this.listaCarregada.emit(e.length);

    });
  }

  excluir(evento: Evento): void{
    this.eventoService.excluirEvento(evento).subscribe(_ => {
      this.removeEventoDaLista(evento);
    });
  }

  removeEventoDaLista(evento: Evento): void{
    var index = this.eventos.indexOf(evento);
    this.eventos.splice(index, 1);
  }
}
