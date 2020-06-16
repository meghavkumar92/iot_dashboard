import React, { Component } from 'react';
import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';
import pressure from './images/pressure.png';


class Pressure extends Component {
  constructor(props) {
    super(props);    
  }
       
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