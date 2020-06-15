import React, { Component } from 'react';


import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';

import pressure from './images/pressure.png';


class Pressure extends Component {
  constructor(props) {
    super(props);
    //this.state = {pressure_cur: 10, pressure_prev: [10]};
  }
/* 
  componentDidMount() {
    const getQuotes = () => {
      const {pressure_cur, pressure_prev} = this.state;
        this.setState({pressure_cur: pressure_cur+1});
        //alert(pressure_prev)
        pressure_prev.push(pressure_cur+1);
        //this.setState(TEST_DATA);
    };

    //getQuotes();

    //this._interval = window.setInterval(getQuotes, 1000); // <- Five seconds. One hour would be 3600000 ms
  }

  componentWillUnmount() {
    this._interval && window.clearInterval(this._interval);
  } */
    
     useStyles = makeStyles(theme => ({
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
      }));
    
    render() { 
        
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
              style={{fontWeight:500}}
            >
              Pressure
            </Typography>
            <Typography variant="h3">{this.props.data.pressure}</Typography>
            {/* <p> {new Date().getUTCHours().toString()}:{new Date().getUTCMinutes().toString()}:{new Date().getUTCSeconds().toString()} </p> */}
                        </Grid>
                        <Grid item style={{backgroundColor: 'grey'}}>
            <Avatar className="backgroundColor: theme.palette.error.main, height:100, width: 100" src={pressure} alt="%"> 
            </Avatar>
          </Grid>

                    </Grid>

                </CardContent>

            </Card>

         );
    }
}
 
export default Pressure;