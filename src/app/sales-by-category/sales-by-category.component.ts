import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: false,
  
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise visitors'
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
        type: 'pie',
        data:[
          {
            name: 'General',
            y: 45.0,
            color: 'blue'
          },
          {
            name: 'Organisation',
            y: 150.0,
            color: 'blue'
          },
          {
            name: 'VIP',
            y: 235.0,
            color: 'aqua'
          },
        ]
      }
    ],
    credits: {
      enabled: false
    }
  
  })
}
