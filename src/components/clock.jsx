import React, { Component } from 'react';
import { Card, CardContent, Grid, Typography,Avatar} from '@material-ui/core';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleTimeString()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval( () => this.tick(),1000 );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      }
    render() { 
        return ( 
            <Card>
            <CardContent>
                <Grid>
                    <Grid item>
                    <Typography className="fontWeight: 700" color="textSecondary" gutterBottom variant="body2">
                      Current Time
                    </Typography>
                    <Typography variant="h4"> {this.state.time}  </Typography>
                    </Grid>
                </Grid>

            </CardContent>

        </Card>  
      
    );
    }
}
 
export default Clock;
