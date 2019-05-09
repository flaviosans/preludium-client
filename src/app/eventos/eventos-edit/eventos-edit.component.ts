import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/interfaces/evento';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.css']
})
export class EventosEditComponent implements OnInit {
  @Input() evento: Evento;
  @Output() eventoSalvo = new EventEmitter();
  
  constructor(
    private eventoService: EventoService) { }

  ngOnInit() {

  }

  salvar(evento: Evento){
    this.eventoService.alterarEvento(evento).subscribe(_ => {
      this.eventoSalvo.emit();
    });
  }

}
