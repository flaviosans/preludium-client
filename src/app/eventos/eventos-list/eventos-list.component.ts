import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit, OnChanges {

  eventos: Evento[];
  urlArgs;
  @Input() tempo: string;
  @Input() mes: string;
  @Input() q: string;
  @Output() eventoSelecionado = new EventEmitter();
  @Output() eventoExcluido = new EventEmitter();
  @Output() listaCarregada = new EventEmitter();


  constructor(private eventoService: EventoService) { }

  ngOnInit(){
    this.urlArgs = [
        { prop: 'tempo', val: this.tempo },
        { prop: 'mes', val: this.mes },
    ];

    this.eventoService.obterEventos(this.urlArgs)
        .subscribe( (e: Evento[]) => {
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

  excluir(evento: Evento): void {
    this.eventoService.excluirEvento(evento).subscribe(_ => {
      this.removeEventoDaLista(evento);
    });
  }

  removeEventoDaLista(evento: Evento): void{
    var index = this.eventos.indexOf(evento);
    this.eventos.splice(index, 1);
  }
}
