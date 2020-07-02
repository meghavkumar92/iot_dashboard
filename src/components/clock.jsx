import React, { Component } from "react";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";

class Clock extends Component {
    constructor(props) {
        super(props);      
      }
      
    render() { 
        return ( 
            <Card>
            <CardContent style={{backgroundColor: 'grey'}}>
                <Grid>
                    <Grid item style={{backgroundColor: 'grey'}}>
                    <Typography className="fontWeight: 700" color="textSecondary" gutterBottom variant="body2" style={{fontWeight:500}}>
                      Last Updated
                    </Typography>
                    <Typography variant="h4"> {this.props.data.modifiedTime}  </Typography>
                    </Grid>
                    <Grid item style={{backgroundColor: 'grey'}}>          
         
          </Grid>
                </Grid>

            </CardContent>

        </Card>  
      
    );
    }
}
 
export default Clock;
