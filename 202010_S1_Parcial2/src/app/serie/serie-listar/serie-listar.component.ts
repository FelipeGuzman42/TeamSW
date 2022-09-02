import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {
  constructor(private serieService: SerieService) { }

  selectedSerie: Serie;
  selected = false;

  onSelected(s: Serie): void{
    this.selected = true;
    this.selectedSerie = s;
  }

  private series: Array<Serie>;

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    })
  }
  ngOnInit() {
    this.getSeries();
  }

  promedio(): number {
    let prom = 0;
    let i = 0;
    for (const ser of this.series) {
      prom = prom + ser.seasons;
      i++;
    }
    return prom/i;
  }
}
