import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/interfaces/evento';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.css']
})
export class EventosEditComponent implements OnInit {
  evento: Evento;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventoService: EventoService) { }

  ngOnInit() {
    var eventoId = +this.activatedRoute.snapshot.params["id"];
    this.eventoService.obterEvento(eventoId).subscribe(e => {
      this.evento = e;
    });
  }

  salvar(evento: Evento){
    this.eventoService.alterarEvento(evento).subscribe(e => {
      this.router.navigate(['/eventos']);
    });
  }

}
