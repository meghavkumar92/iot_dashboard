import React , {Component} from "react";
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
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";




const useStyles = makeStyles(styles);





export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={3}>

                <Temperature />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
               
                <Pressure/>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Humidity/>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Clock/>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                 <Card chart>
                  <CardHeader color="success">
                    <TempGraph/>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Daily Sales</h4>
                    <p className={classes.cardCategory}>
                      <span className={classes.successText}>
                        <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                      </span>{" "}
                      increase in today sales.
                    </p>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> updated 4 minutes ago
                    </div>
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
                    <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                    <p className={classes.cardCategory}>Last Campaign Performance</p>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> campaign sent 2 days ago
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card chart>
                  <CardHeader color="danger">
                    <ChartistGraph
                      className="ct-chart"
                      data={completedTasksChart.data}
                      type="Line"
                      options={completedTasksChart.options}
                      listener={completedTasksChart.animation}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Completed Tasks</h4>
                    <p className={classes.cardCategory}>Last Campaign Performance</p>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> campaign sent 2 days ago
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
  );
}
