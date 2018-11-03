import {Injectable} from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Evento} from "../interfaces/evento";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json' }
  )
};

//para ser descomentado antes do ng build
// const url: string = "/api/eventos/";
//URL acessada no ng serve
const url: string = "http://localhost:8000/api/eventos/";

@Injectable({
  providedIn: 'root'
})
export class EventoService{ 
  constructor(private http: HttpClient) { }

  obterEventos(): Observable<Evento[]>{ 
    return this.http.get<Evento[]>(url);
  }

  obterEvento(id: number): Observable<Evento> {
    return this.http.get<Evento>(url + id);
  }

  salvarEvento(evento: Evento){
    return this.http.post<Evento>(url,evento, httpOptions).pipe(
        tap((evento: Evento) => console.log(`Evento ${evento.id}`)),
        catchError(this.handleError<Evento>('addEvento'))
    );
  }

  alterarEvento(evento: Evento){
    return this.http.put<Evento>(url + evento.id, evento, httpOptions)
  }

  excluirEvento(evento: Evento){
    return this.http.delete<Evento>(url + evento.id, httpOptions);
  }

  private handleError<T> (operacao = 'operacao', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operacao} falhou: ${error.message}`);
        return of(result as T);
    }
  }
}
