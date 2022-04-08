import { Component, Input, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() linea: boolean = false;
  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';


  constructor() {}

  ngOnInit(): void {
    if ( this.linea ){
      this.barChartType='line';
    }
  }

  

}
