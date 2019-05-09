import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos-create',
  templateUrl: './eventos-create.component.html',
  styleUrls: ['./eventos-create.component.css']
})
export class EventosCreateComponent implements OnInit {
  @Output() eventoSalvo = new EventEmitter();

  constructor(
    private eventoService: EventoService) { }

  ngOnInit() { }

  salvar(evento: Evento){
    this.eventoService.salvarEvento(evento).subscribe(_ => {
      this.eventoSalvo.emit();
    })
  }
}
