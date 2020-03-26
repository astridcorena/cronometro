import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Typography, Card, Paper} from '@material-ui/core'

const StopwatchDisplay = ({time}) => {
    const timeFormatted = moment(time).format('mm:ss')
    const miliseconds = moment(time).format("SS")
    return(
        <Paper >
        <Typography variant ="h1">{timeFormatted}</Typography>
        <Typography variant ="h3" align ="center">{miliseconds}</Typography>

        </Paper>
    )

}

StopwatchDisplay.propTypes ={
    time : PropTypes.number.isRequired
}

export default StopwatchDisplay
