import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { AtendimentoItem } from './atendimento-item.interface';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      Lista de atendimento
    </h1>
  </div>
  <ul>
    <li *ngFor="let item of items">
      <h2>Coordenador:{{ item.coordenador }}<br><br>  Assunto:{{ item.assunto }}<br><br> Descricão:{{ item.descricao }}<br><br> 
      Data{{ item.data }}<br>

      <button *ngFor="let item of items" (click)="delete(item.id)">Excluir</button></h2><br>

    </li>
  </ul>
  
    <input #itemcoordernador type='text' placeholder='coordernador'>
  <input #itemassunto type='text' placeholder='assunto'>
  <input #itemdescricao type='text' placeholder='descricao'>
  <input #itemdata type='text' placeholder='data'>
  <button *ngFor="let item of items" (click)="add(itemcoordenador.value, itemassunto.value, itemdescricao.value, itemdata.value)">Add</button>

  {{ error?.message }}
  `
})
export class AppComponent implements OnInit {

  items: AtendimentoItem[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAtendimentoItems().subscribe(
      (items: AtendimentoItem[]) => this.items = items,
      (error: any) => this.error = error
    );
  }



  delete(id: number) {
    this.api.deleteAtendimentoItem(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      )
    );
  }
     add(coordenador: string, assunto: string, descricao: string, data: string) {
    this.api.createAtendimentoItem(itemcoordernador, itemassunto, itemdescricao, itemdata).subscribe(
      (item: AtendimentoItem) => this.items.push(item)
    );
  }


}
