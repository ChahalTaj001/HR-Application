import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  pieChartData = { 
    labels: ["2015","2016","2017","2018","2019","2020","2021","2022"],
    datasets: [
      {
        data:[400000, 450000, 420000, 500000, 550000, 400000, 600000, 650000],
        label: 'Salary',
        fill: true,
        outerWidth:200,
        height:100
      }
    ]
  }
}
