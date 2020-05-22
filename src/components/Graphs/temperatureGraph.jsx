import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import lo from 'lodash';
//var Chart = require('chart.js');

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: 30,
    margintop: 20,
    height: 100    
  };

const myLabs = ["Day1", "Day2", "Day3", "Day4", "Day5"];
const myDats = [4.5, 5.0, 6.0, 3.1, 5.6];


const myChartData = (labs,dats) => {
    //const ctx = canvas.getContext("2d")
    //const gradient = ctx.createLinearGradient(0,0,100,0);
    //console.log(this.chartReference);
    return{
    labels: labs,
    datasets: [
      {
        label: "Graph for Temperature data recorded",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderColor: "rgba(255,255,255,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        data: dats,
        
      }
    ]
  }
  };

  let lineChart;
  

  class TempGraph extends Component {

      constructor(props) {
        super(props);
        this.state = {counter:5, labels:  myLabs, data: myDats};
        this.chartRef = null;
      }
      
      createChart = (labels, data) => {
        let ctx = document.getElementById("bar_l2_chart").getContext('2d');
        if (this.chartRef == null)
        {
            lineChart = new Chart(ctx, {
                type: 'line',
                data: myChartData(labels,data),
            });
          this.chartRef = lineChart;
          console.log(this.chartRef.data.labels);
        }  
      };

      updateChart = (labels, data) => {
        //console.log(this.chartRef.data);
        this.chartRef.data.labels = labels; //lo.takeRight(labels,5);
        //console.log(this.chartRef.data.datasets[0]);
        this.chartRef.data.datasets.forEach((dataset) => {
          dataset.data = data; });
        this.chartRef.update();
      };

      componentDidMount() {
          const updatePressure = () => {
          this.setState({counter:this.state.counter+1});
          const {counter, labels, data} = this.state;
          const str = "Day" + `${counter}`;
          labels.push(str);
          data.push(lo.round(100*Math.random()));
          const new_dats = this.state.data;
          const new_labs = this.state.labels;
          this.setState({data: lo.takeRight(new_dats,5)});
          this.setState({labels: lo.takeRight(new_labs,5)})
          this.updateChart(this.state.labels, this.state.data);
      };
        //updatePressure();
        this.createChart(this.state.labels,this.state.data);
       // this._interval = window.setInterval(updatePressure, 10000); // <- Five seconds. One hour would be 3600000 ms
      }

      componentWillUnmount() {
        this._interval && window.clearInterval(this._interval);
      }
        
      render() { 
        //data.labels = this.state.labels;
        //data.data = this.state.data;
        //this.addData(this.chartRef,"DayNew",this.state.counter);
        //<Line ref={this.chartReference} data={myChartData(myLabs,myDats)} />
        //<p>{this.state.counter}</p>
        //<p>{this.state.labels}</p>
        //<p>{this.state.data}</p>
          return ( 
            <div /* style={styles} */>
                <div> <canvas id="bar_l2_chart" width="500" height="300"></canvas> </div>
                
            </div>
           );
      }
  }
   
  export default TempGraph;