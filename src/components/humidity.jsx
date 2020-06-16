import React, { Component } from 'react';
import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';
import humidity from './images/humidity.jpg';


class Humidity extends Component {
     
      constructor(props){
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
              Humidity
            </Typography>
            <Typography variant="h3">{this.props.data.humidity}</Typography>
                        </Grid>
                        <Grid item style={{backgroundColor: 'grey'}}>
            <Avatar className="backgroundColor: theme.palette.error.main, height: 100, width: 100" src={humidity} alt="%">
            </Avatar>
          </Grid>

                    </Grid>

                </CardContent>

            </Card>

         );
    }
}
 
export default Humidity;