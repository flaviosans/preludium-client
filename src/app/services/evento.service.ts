import {Injectable} from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Evento} from '../interfaces/evento';
import {environment} from '../../environments/environment';

const url: string = environment.apiUrl + 'eventos/';
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json' }
  )
};
class UrlArg{
    prop: string;
    val: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService{
  constructor(private http: HttpClient) { }

  obterEventos(urlArgs: UrlArg[]): Observable<Evento[]> {
    let novaUrl = url;
    if(urlArgs.length > 0) {
        novaUrl += '?';
        urlArgs.forEach(element => {
            if (element.val !== undefined) {
                novaUrl += `${element.prop}=${element.val}&`;
            }
        });
        novaUrl = novaUrl.substr(0, novaUrl.length-1);
    }
    return this.http.get<Evento[]>(novaUrl, httpOptions);
  }

  obterEvento(id: number): Observable<Evento> {
    return this.http.get<Evento>(url + id, httpOptions);
  }

  salvarEvento(evento: Evento){
    return this.http.post<Evento>(url, evento, httpOptions).pipe(
        tap((evento: Evento) => console.log(`Evento ${evento.id}`)),
        catchError(this.handleError<Evento>('addEvento'))
    );
  }

  alterarEvento(evento: Evento){
    return this.http.put<Evento>(url + evento.id, evento);
  }

  excluirEvento(evento: Evento){
    return this.http.delete<Evento>(url + evento.id);
  }

  private handleError<T> (operacao = 'operacao', result?: T) {
    return (error: any): Observable<T> => {
        alert(error);
        console.error(error);
        console.log(`${operacao} falhou: ${error.message}`);
        return of(result as T);
    };
  }
}
