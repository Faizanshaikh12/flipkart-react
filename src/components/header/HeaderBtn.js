import React from 'react';
import {Badge, Box, Button, makeStyles, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";

const useStyles = makeStyles({
    login: {
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrap: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center'
        }
    },
    container:{
        display: 'flex',
    }
})


function HeaderBtn() {
    const classes = useStyles();
    return (
        <Box className={classes.wrap}>
            <Button variant="contained" className={classes.login}>Login</Button>
            <Typography style={{marginTop: 5}}>More</Typography>
            <Box className={classes.container}>
                <Badge color="secondary" badgeContent={2}>
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Box>
        </Box>
    );
}

export default HeaderBtn;
