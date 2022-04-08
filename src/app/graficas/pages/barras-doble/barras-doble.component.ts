import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {
  

  provedoresData: ChartData<'bar'> = {
    labels: [2015,2016,2017,2018,2019],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  };
  
  productoData: ChartData<'bar'> = {
    labels: [2015,2016,2017,2018,2019],
    datasets: [
      { data: [ 200, 300,400,300, 10 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  };
 
  

}
