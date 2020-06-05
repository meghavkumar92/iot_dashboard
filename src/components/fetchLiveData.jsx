import React, { Component } from 'react';

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Temperature from "components/temperatur.jsx";
import Pressure from "components/pressure.jsx";
import Humidity from "components/humidity.jsx";
import Clock from "components/clock.jsx";
import TempGraph from "components/Graphs/temperatureGraph.jsx";
import PressureGraph from "components/Graphs/pressureGraph.jsx";
import HumidityGraph from "components/Graphs/humidityGraph.jsx";
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import axios from 'axios';
const serverUrl = 'http://192.168.56.1:5000';
const http = axios.create({baseUrl: serverUrl,})


class FetchData extends Component {
    constructor(props){
        super(props);
        this.state = {counter:10, temperature: 30, pressure:999, humidity:90, modifiedTime: "05-06-2020 10:52:44"};

      }

      componentDidMount(){
        const getLiveData = () =>{        
          console.log("updateHumidity function is called.")
          const {counter} = this.state;
          console.log(counter)
          const info = {"counter":counter}
          axios.post(serverUrl,info).then((response) => this.updateState(response.data))
          .catch((err) => console.log(err))
              }
       // this._interval = window.setInterval(getLiveData,5000)
      }
  
      updateState(resdata){
        console.log(resdata)
        this.setState({counter: resdata.counter})
        this.setState({temperature: resdata.temperature.value})        
        this.setState({pressure:resdata.pressure.value})
        this.setState({humidity:resdata.humidity.value})
        this.setState({modifiedTime:resdata.createdTime.value})
        this.setState({unit:resdata.temp.unit})
       
      }

    render() { 

        const data = this.state;
        console.log(data)
        return (  <div> <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Temperature data = {data} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Pressure data = {data}/>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Humidity data = {data}/>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Clock data = {data}/>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
               <Card chart>
                <CardHeader color="success">
                  <TempGraph/>
                </CardHeader>
                <CardBody>
                    <p>Temperature Graph</p>
                 {/*  <h4 className={this.props.classes.cardTitle}>Daily Sales</h4>
                  <p className={this.props.classes.cardCategory}>
                    <span className={this.props.classes.successText}>
                      <ArrowUpward className={this.props.classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in today sales.
                  </p> */}
                </CardBody>
                <CardFooter chart>
                <div >
                    <AccessTime /> updated 4 minutes ago
                  </div>
                  {/* <div className={this.props.classes.stats}>
                    <AccessTime /> updated 4 minutes ago
                  </div> */}
                </CardFooter>
              </Card> 
              <TempGraph/>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="warning">
                  <PressureGraph/>
                </CardHeader>
                <CardBody>
                  <h4 >Pressure Graph</h4>
                 {/*  <p >Last Modified </p> */}
                </CardBody>
                <CardFooter chart>
                  <div >
                    <AccessTime /> updated 4 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="danger">
                 {/*  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  /> */}
                  <HumidityGraph/>
                </CardHeader>
                <CardBody>
                  <h4 >Humidity Graph</h4>
                 {/*  <p >Last Modified</p> */}
                </CardBody>
                <CardFooter chart>
                  <div >
                    <AccessTime /> updated 4 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>);
    }
}
 
export default FetchData;