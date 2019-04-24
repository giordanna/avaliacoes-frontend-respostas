import { Component, Input } from '@angular/core';
import { LegendsService } from '../../legends.service';

@Component({
  selector: 'app-item',
  templateUrl: 'item.page.html',
})
export class ItemPage {
  @Input() lenda: string;
  @Input() indice: number;
  editOn: boolean = false;

  constructor(private legendsService: LegendsService) {}

  mudarModo() {
    this.editOn = !this.editOn;
    this.legendsService.setLegend(this.indice, this.lenda);
  }

}
