import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {products} from "../../constants/data";
import {Box, Button, Divider, makeStyles, Typography} from "@material-ui/core";
import Countdown from "react-countdown";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024}, items: 5
    }, tablet: {
        breakpoint: {max: 1024, min: 464}, items: 2
    }, mobile: {
        breakpoint: {max: 464, min: 0}, items: 1
    }
};

const useStyles = makeStyles({
    image: {
        height: 150
    }, component: {
        marginTop: 12, background: '#ffffff'
    }, deal: {
        padding: '15px 20px', display: 'flex'
    }, dealText: {
        fontSize: 22, fontWeight: 'bold', lineHeight: '32px', marginRight: 25
    }, timer: {
        color: '#7f7f7f', marginLeft: 10, display: 'flex', alignItems: 'center'
    }, btn: {
        marginLeft: 'auto', background: '#2874f0', borderRadius: 2, fontSize: 13
    }, text: {
        fontSize: 14, marginTop: 5
    }, wrap: {
        padding: '16px 15px'
    }
})

function Slide() {
    const classes = useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({hours, minutes, seconds}) => {
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left </span>;
    }

    return (<Box className={classes.component}>
        <Box className={classes.deal}>
            <Typography className={classes.dealText}>Deal of the day</Typography>
            <img src={timerURL} alt={timerURL} style={{width: '24px'}}/>
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
            <Button variant="contained" color="primary" className={classes.btn}>View All</Button>
        </Box>
     <Divider/>
        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={false}
            autoPlay={true}
            centerMode={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {products.map((product, index) => (<Box textAlign="center" className={classes.wrap}>
                <img src={product.url} key={index} className={classes.image}/>
                <Typography className={classes.text}
                            style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
                <Typography className={classes.text} style={{color: 'green'}}>{product.discount}</Typography>
                <Typography className={classes.text}
                            style={{color: '#212121', opacity: '.6'}}>{product.tagline}</Typography>
            </Box>))}
        </Carousel>
    </Box>);
}

export default Slide;
