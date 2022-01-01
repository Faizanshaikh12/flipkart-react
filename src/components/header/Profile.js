import React, {useState} from 'react';
import {Box, Button, makeStyles, Menu, MenuItem, Typography} from "@material-ui/core";
// import {PowerSettingsNewIcon} from '@material-ui/icons';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
const useStyles = makeStyles({
    component: {marginTop: 20},
    logout:{marginLeft: 15, fontSize: 14}
})

function Profile({account, setAccount}) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    };

    const hadleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const logout = () => {
    setAccount('');
    }

    const classes = useStyles();
    return (<Box>
        <Button style={{marginTop: 2, color: '#ffffff'}} onClick={hadleClick}>{account}</Button>
        <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            className={classes.component}
        >
            <MenuItem onClick={() => {handleClose(); logout();}}>
                <PowerSettingsNewIcon fontSize="small" color="primary"/>
                <Typography className={classes.logout}>Logout</Typography>
            </MenuItem>

        </Menu>
    </Box>);
}

export default Profile;
