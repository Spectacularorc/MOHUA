import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-last-few-transactions',
  standalone: false,
  
  templateUrl: './last-few-transactions.component.html',
  styleUrl: './last-few-transactions.component.scss'
})
export class LastFewTransactionsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 270
    },
    title: {
      text: 'Pending Dak'
    },
    xAxis: {
      categories: [
       'General',
       'Organisation',
       'VIP'
      ]
    },

    yAxis: {
      title: {
        text: 'Number of visitors'
      }
    },

    series: [
      {
        type: 'bar',
        data:[
          {
            name: 'General',
            y: 30.0,
            color: 'orange'
          },
          {
            name: 'Organisation',
            y: 35.0,
            color: 'yellow'
          },
          {
            name: 'VIP',
            y: 20,
            color: 'red'
          },
        ]
      }
    ],
    credits: {
      enabled: false
    }
  
  })
}
