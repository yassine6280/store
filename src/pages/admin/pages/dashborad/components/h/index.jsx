import React from "react";
import ReactApexChart from "react-apexcharts";
const colors=['#F44336', '#E91E63', '#9C27B0']
export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [ {
            name: 'البيع',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'الشراء',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return " الربح :" + val + " دينار"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


      );
    }
  }
