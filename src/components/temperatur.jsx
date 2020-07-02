import React, { Component } from "react";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";
//import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from "@material-ui/styles";
import celsius from "./images/celsius.png";
//import dashboard from './dashboard.css';

class Temperature extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    //this.state = {counter: this.props.counter};
  }
    
    render() { 
        
        return ( 
            <Card >
                <CardContent style={{backgroundColor: 'grey'}}>
                    <Grid >
                        <Grid item style={{backgroundColor: 'grey'}}>
                        <Typography
              className="fontWeight:200"
              color="textSecondary"
              gutterBottom
              variant="body2"  
              style={{fontWeight:500}}       
            >
              Temperature
            </Typography>
        <Typography variant="h3">{this.props.data.temperature}</Typography>
                        </Grid>
                        <Grid item style={{backgroundColor: 'grey'}}>
            <Avatar className="backgroundColor: theme.palette.error.main, height: 80, width: 80" src={celsius} alt="degree Celsius">
               {this.props.data.unit}
            </Avatar>
          </Grid>

                    </Grid>

                </CardContent>

            </Card>

         );
    }
}
 
export default Temperature;