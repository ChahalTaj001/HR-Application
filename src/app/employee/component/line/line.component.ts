import { Component } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  lineChartData = { 
    labels: ["2015","2016","2017","2018","2019","2020","2021","2022"],
    datasets: [
      {
        data:[400000, 450000, 420000, 500000, 550000, 400000, 600000, 650000],
        label: 'Salary',
        fill: true
      }
    ]
  }
}