import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.scss']
})
export class RequisicaoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public request(method: string, url: string, body?: any): Observable<any> {
    switch (method.toLowerCase()) {
      case 'get':
        return this.http.get(url);
      case 'post':
        return this.http.post(url, body);
      case 'put':
        return this.http.put(url, body);
      case 'delete':
        return this.http.delete(url);
      default:
        throw new Error('Método HTTP não suportado');
    }
  }
}
