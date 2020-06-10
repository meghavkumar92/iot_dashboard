import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import lo from 'lodash';
//var Chart = require('chart.js');

import axios from 'axios';
const serverUrl = 'http://192.168.56.1:5000/pressure';
const http = axios.create({baseUrl: serverUrl,})

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
        label: "Graph for Pressure data recorded",
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
  

  class pressureGraph extends Component {

      constructor(props) {
        super(props);
        this.state = {counter:5, labels:  myLabs, data: myDats};
        this.chartRef = null;
        this.getPressure = this.getPressure.bind(this);
      }
      
      createChart = (labels, data) => {
        let ctx = document.getElementById("bar_l1_chart").getContext('2d');
        if (this.chartRef == null)
        {
            lineChart = new Chart(ctx, {
                type: 'line',
                data: myChartData(labels,data),
            });
          this.chartRef = lineChart;
          //console.log(this.chartRef.data.labels);
        }  
      };

      componentDidMount(){
        this.createChart(this.state.labels,this.state.data)
      }


      updateChart = (labels, data) => {
        console.log("updateChart method");
        //console.log(this.chartRef.data);
        this.chartRef.data.labels = labels; //lo.takeRight(labels,5);
        //console.log(this.chartRef.data.datasets[0]);
        this.chartRef.data.datasets.forEach((dataset) => {
          dataset.data = data; });
        this.chartRef.update();
      };

      
      
     
      getPressure(){
      const updateGraph = (resData) => {
          console.log(resData);
          const {counter, labels, data} = this.state;
          const labellist = [];
          const datalist = [];
          Object.keys(resData).map((key, i) => {
            console.log("inside updateGraph");            
           // console.log(resData[key].fetcheddata.createdTime); 
           // console.log(resData[key].fetcheddata.value);
           const larr = resData[key].fetcheddata.createdTime;
           const darr = resData[key].fetcheddata.value;
           labellist.push(larr);
           datalist.push(darr);
           console.log(data);          
          }) 
          this.setState({data: datalist});
          this.setState({labels:labellist});  
          this.updateChart(this.state.labels,this.state.data);
          console.log("updategraph method")
        }
        //API request to fetch data
        const info = {"pressure":"pressure"};
        axios.post(serverUrl,info).then((response) => updateGraph(response.data))
        .catch((err) => console.log(err))
      }  
      
      render() { 
        
          return ( 
            <div /* style={styles} */>
                <div> <canvas id="bar_l1_chart" width="400" height="300"></canvas> </div>
                <button onClick={this.getPressure}>Graph</button>
            </div>
           );
      }
  }
   
  export default pressureGraph;