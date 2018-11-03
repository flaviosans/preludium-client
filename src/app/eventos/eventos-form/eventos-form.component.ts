import { Component, OnInit, Input, Output } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {
  @Input() evento: Evento;
  @Output() eventoSalvo = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.evento = <Evento>{};
  }

  salvar() {
    this.eventoSalvo.emit(this.evento);
  }

  // 23/01/1989
  toDate(data: string): string{
    var dia = data.substr(0,2);
    var mes = data.substr(3,2);
    var ano = data.substr(6,2);
    var dataIso = `${ano} ${mes} ${dia} 00:00:00`;
    console.log(dataIso);
    return dataIso;
  }
}
