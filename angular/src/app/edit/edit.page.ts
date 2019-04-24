import { Component } from '@angular/core';
import { LegendsService } from '../legends.service';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: Array<string>;

  constructor(private legendsService: LegendsService) {}

  ngOnInit() {
    this.legends = this.legendsService.getLegends();
  }

}


