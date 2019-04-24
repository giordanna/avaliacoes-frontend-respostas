import { Component } from '@angular/core';
// Questão 3A: importando lista
import { LegendsService } from '../legends.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string>;
  
  // Questão 3A: tornando disponível para o componente
  constructor(private legendsService: LegendsService) {}

  ngOnInit() {
    this.legends = this.legendsService.getLegends();
  }

  dispararEvento(evento) {
    console.log(evento);
    evento.details.complete();
  }
}
