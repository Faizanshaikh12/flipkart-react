import React from 'react';
import {InputBase, makeStyles} from "@material-ui/core";
import {Search} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    search: {
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',
        color: 'black'
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'blue'
    },
    inputRoot: {
        width: '100%',
        fontSize: 13
    },
    inputInput: {
        paddingLeft: 20
    },
}));

function SearchBar() {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search for product, brand for more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <Search />
            </div>
        </div>
    );
}

export default SearchBar;
