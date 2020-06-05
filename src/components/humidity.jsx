import React, { Component } from 'react';

import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';

import humidity from './images/humidity.jpg';

import axios from 'axios';
const serverUrl = 'http://192.168.56.1:5000';
const http = axios.create({baseUrl: serverUrl,})

class Humidity extends Component {
    
    /*  useStyles = makeStyles(theme => ({
        root: {
          height: '50%'
        },
        content: {
          alignItems: 'center',
          display: 'flex'
        },
        title: {
          fontWeight: 700
        },    
        difference: {
          marginTop: theme.spacing(2),
          display: 'flex',
          alignItems: 'center'
        },
        differenceIcon: {
          color: theme.palette.error.dark
        },
        differenceValue: {
          color: theme.palette.error.dark,
          marginRight: theme.spacing(1)
        }
      })); */
      constructor(props){
        super(props);
        this.state = {counter:1};
      }
    componentDidMount(){
      const getHumidity = () =>{        
        console.log("updateHumidity function is called.")
        const {counter} = this.state;
        console.log(counter)
        const info = {"counter":counter}
        axios.post(serverUrl,info).then((response) => this.updateHumidityState(response.data))
        .catch((err) => console.log(err))
            }
     // this._interval = window.setInterval(getHumidity,10000)
    }

    updateHumidityState(data){
      console.log(data)
      this.setState({counter: data.counter})
      console.log(data.temp.temperature)
      console.log(data.pres.pressure)
      console.log(data.humd.unit)
      console.log(data.modi.created)
    }
    render() { 
        const {counter} = this.state;
        return ( 
            <Card>
                <CardContent style={{backgroundColor: 'grey'}}>
                    <Grid>
                        <Grid item style={{backgroundColor: 'grey'}}>
                        <Typography
              className="fontWeight: 700"
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Humidity
            </Typography>
            <Typography variant="h3">{this.state.counter}</Typography>
                        </Grid>
                        <Grid item style={{backgroundColor: 'grey'}}>
            <Avatar className="backgroundColor: theme.palette.error.main, height: 56, width: 56" src={humidity} alt="%">
            </Avatar>
          </Grid>

                    </Grid>

                </CardContent>

            </Card>

         );
    }
}
 
export default Humidity;