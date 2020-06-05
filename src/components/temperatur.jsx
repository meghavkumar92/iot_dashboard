import React, { Component } from 'react';
import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';
//import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';
import celsius from './images/celsius.png';
//import dashboard from './dashboard.css';



class Temperature extends Component {
    
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
            <Typography variant="h3">{this.props.greeting}</Typography>
                        </Grid>
                        <Grid item style={{backgroundColor: 'grey'}}>
            <Avatar className="backgroundColor: theme.palette.error.main, height: 80, width: 80" src={celsius} alt="degree Celsius">
               {/* <MoneyIcon className=" height: 32, width: 32" /> */} 
               
            </Avatar>
          </Grid>

                    </Grid>

                </CardContent>

            </Card>

         );
    }
}
 
export default Temperature;