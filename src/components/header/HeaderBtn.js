import React, {useState} from 'react';
import {Badge, Box, Button, makeStyles, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import {Link} from "react-router-dom";
import LoginDialog from "../login/Login"

const useStyles = makeStyles({
    login: {
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    }, wrap: {
        margin: '0 7% 0 auto', display: 'flex', '& > *': {
            marginRight: 50, alignItems: 'center', textDecoration: 'none', color: '#ffffff'
        }
    }, container: {
        display: 'flex',
    }
})


function HeaderBtn() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const openLoginDialog = () => {
        setOpen(true);
    }

    return (<Box className={classes.wrap}>
        <Link>
            <Button
                variant="contained"
                className={classes.login}
                onClick={() => openLoginDialog()}
            >
                Login
            </Button>
        </Link>
        <Link to='more'><Typography style={{marginTop: 5}}>More</Typography></Link>
        <Link to='/cart' className={classes.container}>
            <Badge color="secondary" badgeContent={2}>
                <ShoppingCart/>
            </Badge>
            <Typography style={{marginLeft: 10}}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Box>);
}

export default HeaderBtn;
