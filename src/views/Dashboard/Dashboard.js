import React , {Component} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import FetchData from "../../components/fetchLiveData.jsx"
const useStyles = makeStyles(styles);


export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <div><FetchData/>
    </div>
  );
}
