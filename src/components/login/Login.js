import React from 'react';
import {Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        height: '70vh', width: '90vh'
    }, image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#ffffff', fontWeight: 600,
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 18
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        background: '#fb641b',
        color: '#ffffff',
        height: 40,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 40,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
    },
    createText: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    }
})

function Login({open, setOpen}) {
    const classes = useStyle();

    const handleClose = () => {
        setOpen(false);
    }
    return (<Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.component}>
            <Box style={{display: 'flex'}}>
                <Box className={classes.image}>
                    <Typography variant="h5">Login</Typography>
                    <Typography style={{marginTop: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.</Typography>
                </Box>
                <Box className={classes.login}>
                    <TextField name="username" label="Enter Email/Mobile number"/>
                    <TextField name="password" label="Enter Password"/>
                    <Typography className={classes.text}>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</Typography>
                    <Button variant="contained" className={classes.loginBtn}>Login</Button>
                    <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                    <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                    <Typography className={classes.createText}>New to FlipKart? Create an account</Typography>
                </Box>
            </Box>
        </DialogContent>
    </Dialog>);
}

export default Login;
