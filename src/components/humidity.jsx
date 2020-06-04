import React, { Component } from 'react';

import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';

import humidity from './images/humidity.jpg';



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
            >
              Humidity
            </Typography>
            <Typography variant="h3">39</Typography>
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