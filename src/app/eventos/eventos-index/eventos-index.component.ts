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
  q: string;
  hoje: Date = new Date();
  meses = new Array();

  constructor(private router: Router) { }

  ngOnInit() {
    this.gerarMeses();
  }

  editar(evento: Evento): void{
    this.router.navigate(['/eventos/editar', evento.id]);
  }

  gerarMeses(){
    for (let i = 0; i < 12; i++) {
      this.meses.push( new Date(this.hoje.getFullYear(), (this.hoje.getMonth() + i) % 12));
    }
  }
  pesquisar(q: string): void {
    this.q = q;
  }
}
