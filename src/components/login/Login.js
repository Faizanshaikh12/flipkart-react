import React, {useState} from 'react';
import {Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography} from "@material-ui/core";
import {signin, signup} from "../../http";

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
    }, login: {
        padding: '25px 35px', display: 'flex', flex: 1, flexDirection: 'column', '& > *': {
            marginTop: 18
        }
    }, register: {
        padding: '15px 35px', display: 'flex', flex: 1, flexDirection: 'column', '& > *': {
            marginTop: 10
        }
    }, text: {
        color: '#878787', fontSize: 12
    }, loginBtn: {
        textTransform: 'none', background: '#fb641b', color: '#ffffff', height: 40, borderRadius: 2
    }, requestBtn: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 40,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
    }, createText: {
        textAlign: 'center', marginTop: 'auto', fontSize: 14, color: '#2874f0', fontWeight: 600, cursor: 'pointer'
    }, error: {fontSize: 12, color: '#ff6161', marginTop: 15, fontWeight: 600, lineHeight:0}
})

const intialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, register: {
        view: 'register',
        heading: 'Looks like your new here!',
        subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
}

const initialUser = {
    firstName: '', lastName: '', username: '', phone: '', email: '', password: '',
}

const initialLogin = {
    username: '', password: '',
}

function Login({open, setOpen, setAccount}) {
    const classes = useStyle();

    const [account, toggleAccount] = useState(intialValue.login);
    const [register, setRegister] = useState(initialUser);
    const [login, setLogin] = useState(initialLogin);
    const [error, setError] = useState(false);

    const toggleBtn = () => {
        toggleAccount(intialValue.register);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(intialValue.login);
    }

    const registerUser = async () => {
        const {data} = await signup(register);
        if (!data) return;
        handleClose();
        setAccount(register.username);
    }

    const loginUser = async () => {
        await signin(login).then((res) => {
            handleClose();
            setAccount(login.username);
        }).catch(err => {
            setError(true)
        })
    }

    const handleChange = (e) => {
        setRegister({...register, [e.target.name]: e.target.avalue});
    }

    const handleLogin = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    return (<Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.component}>
            <Box style={{display: 'flex'}}>
                <Box className={classes.image}>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                </Box>
                {account.view === 'login' ? <Box className={classes.login}>
                    <TextField name="username" label="Enter Email/Mobile number"
                               onChange={(e) => handleLogin(e)}/>
                    <TextField name="password" label="Enter Password"
                               onChange={(e) => handleLogin(e)}/>
                    {error && <Typography className={classes.error}>Invalid username and password</Typography>}
                    <Typography className={classes.text}>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</Typography>
                    <Button variant="contained" className={classes.loginBtn}
                            onClick={loginUser}>Login</Button>
                    <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                    <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                    <Typography className={classes.createText} onClick={() => toggleBtn()}>
                        New to FlipKart? Create an account</Typography>
                </Box> : <Box className={classes.register}>
                    <TextField name="firstName" label="Enter Firstname"
                               onChange={(e) => handleChange(e)}/>
                    <TextField name="lastName" label="Enter Lastname"
                               onChange={(e) => handleChange(e)}/>
                    <TextField name="username" label="Enter Username"
                               onChange={(e) => handleChange(e)}/>
                    <TextField name="phone" label="Enter Mobile number"
                               onChange={(e) => handleChange(e)}/>
                    <TextField name="email" label="Enter Email"
                               onChange={(e) => handleChange(e)}/>
                    <TextField name="password" label="Enter Password"
                               onChange={(e) => handleChange(e)}/>
                    <Button variant="contained" className={classes.loginBtn} onClick={registerUser}>Singup</Button>
                </Box>}
            </Box>
        </DialogContent>
    </Dialog>);
}

export default Login;
