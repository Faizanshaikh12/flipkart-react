import React from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";
import {Box, makeStyles} from "@material-ui/core";
import Slide from "./Slide";

const useStyles = makeStyles({
    component: {
        padding: 10,
        background: '#f2f2f2'
    },
    rightWrap:{
        background: '#ffffff',
        padding: 5,
        margin: '12px 0 0 10px',
    }
})

function Home() {
    const classes = useStyles();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display: 'flex'}}>
                    <Box style={{width:'83%'}}>
                        <Slide/>
                    </Box>
                    <Box className={classes.rightWrap}>
                        <img src={adURL} alt={adURL} style={{width: 230}}/>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Home;
