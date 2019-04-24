import { Injectable } from '@angular/core';
import { legends } from './names/nameslist';

@Injectable({
    providedIn: 'root'
})

export class LegendsService {
    legends = legends;

    public getLegends() {
        return this.legends;
    }

    public setLegend(id: number, legend: string) {
        this.legends[id] = legend;
    }
}