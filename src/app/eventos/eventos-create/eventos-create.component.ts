import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-create',
  templateUrl: './eventos-create.component.html',
  styleUrls: ['./eventos-create.component.css']
})
export class EventosCreateComponent implements OnInit {

  constructor(
    private eventoService: EventoService,
    private router: Router) { }

  ngOnInit() {
  }

  salvar(evento: Evento){
    this.eventoService.salvarEvento(evento).subscribe(e => {
      this.router.navigate(['/eventos']);
    })
  }

}
