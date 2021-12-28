import React from 'react';
import {AppBar, Toolbar, makeStyles, Typography, Box, withStyles} from "@material-ui/core";
import SearchBar from "./SearchBar";
import HeaderBtn from "./HeaderBtn";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subUrl: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0
    },
    subHead:{
        fontSize: 10,
        fontStyle: 'italic'
    }
});

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar)

function Header() {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo}/>
                    <Box className={classes.container}>
                        <Typography className={classes.subHead}>Explore
                            <Box component="span" style={{color: '#ffe500'}}>Plus</Box>
                        </Typography>
                        <img src={subURL} className={classes.subUrl}/>
                    </Box>
                </Link>
                <SearchBar/>
                <HeaderBtn/>
            </ToolBar>
        </AppBar>
    );
}

export default Header;
