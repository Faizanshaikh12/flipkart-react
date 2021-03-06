import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import {imageURL} from '../../constants/data'

const useStyles = makeStyles({
    wrap: {
        display: 'flex', marginTop: 20, justifyContent: 'space-between'
    }
})

function MidSection() {
    const classes = useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (<>
        <Box className={classes.wrap}>
            {imageURL.map(image => (<img src={image} style={{width: '33%'}} key={image}/>))}
        </Box>
        <img src={coronaURL} alt={coronaURL} style={{width: '100%', marginTop: 20}}/>
    </>);
}

export default MidSection;
