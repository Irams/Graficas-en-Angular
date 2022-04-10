import { Component} from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { baseColors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  
  public doughnutChartLabels: string[] = [ 'Gordis', 'Maga', 'Heberto' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100 ], 
        backgroundColor: ['#6E84EB', '#9779DB', '#8079F2' ],
        hoverBackgroundColor: ['#F5649E', '#DB5545', '#E8993F']
      },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

}
