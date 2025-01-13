import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: false,
  
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise visitors'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },

    yAxis: {
      title: {
        text: 'Number of visitors'
      }
    },

    series: [
      {
        name: "VIP",
        type: "line",
        data: [70,69,95,145,182,215,252,265,233,18,189]
      },
      {
        name: "General",
        type: "line",
        data: [45,56,145,220,310,210,121,260,200,320,209]
      },
      {
        name: "VIP",
        type: "line",
        data: [24,56,90,122,165,200,189,180,222,254,230]
      }
    ],
    credits: {
      enabled: false
    }

  })
}
