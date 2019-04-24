import { Component } from '@angular/core';
import { LegendsService } from '../legends.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string = "";
  results = [];
  legends: Array<string>;

  constructor(private legendsService: LegendsService) {}

  ngOnInit() {
    this.legends = this.legendsService.getLegends();
  }

  onSearch() {
    // Questão 3B: filtrando lista de lendas pelo nome
    if (this.searchInput === '') {
      this.results = [];
    } else {
      this.results = this.legends.filter(
        lenda => lenda.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1
      );
    }
  }
}
