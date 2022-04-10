import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 
    // 'Gordis', 'Maga', 'Heberto' 
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 
          // 100, 100, 100 
        ], 
        backgroundColor: ['#3b5998', '#c4302b', '#00bb2d','#FD7C0C', '#CE0142' ],
        hoverBackgroundColor: ['#3b5998', '#c4302b', '#00bb2d','#FD7C0C', '#CE0142']
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // Primer Método
    // this.graficasService.getUsRedesSociales()
    //   .subscribe( data => {
    //     // console.log(data);
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     // console.log(labels);
    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets[0].data = values;
    //   });

    // Segundo Método (RXJS)
    this.graficasService.getUsRedesSocDonaData()
        .subscribe( ({labels, values})=>{
          this.doughnutChartData.labels = labels;
          this.doughnutChartData.datasets[0].data = values;     
        });


  }

}
