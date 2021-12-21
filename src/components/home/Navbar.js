import React from 'react';
import {navData} from '../../constants/data'
import {Box, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '60px 80px 0 80px'
    },
    container: {
        textAlign: 'center'
    },
    image: {
        width: 65
    },
    text: {
      fontSize: 14,
      fontWeight: 600
    }
})

function Navbar() {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            {navData.map(data => (
                <Box className={classes.container}>
                    <img src={data.url} className={classes.image}/>
                    <Typography className={classes.text}>{data.text}</Typography>
                </Box>
            ))}
        </Box>
    );
}

export default Navbar;
