import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getAtendimentoItems() {
    return this.http.get(this.apiRoot.concat('atendimento-item/'));
  }

  createAtendimentoItem(coordernador: string, assunto: string,descricao: string, data: string) {
    return this.http.post(
      this.apiRoot.concat(`atendimento-item/`),
      { coordernador, assunto, descricao, data }
    );
  }

  deleteAtendimentoItem(id: number) {
    return this.http.delete(this.apiRoot.concat(`atendimento-item/${id}/`));
  }
}
