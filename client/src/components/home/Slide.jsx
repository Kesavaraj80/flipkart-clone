import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button, Divider } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


// 


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyle = makeStyles({
    image: {
        height: 150
    },
    component: {
        marginTop: 12,
        background: "#FFFFFF"
    },
    deal: {
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: "#7f7f7f",
        marginLeft: "10px",
        display: "flex",
        alignItems: "center"
    },
    button: {
        marginLeft: 200
    },
    wrapper: {
        padding: "35px 15px"
    }
});

const Slide = ({ timer, title, products }) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
    };
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography style={{
                    fontSize: 22,
                    fontWeight: 600,
                    lineHeight: '32px',
                    marginRight: 25
                }}>{title}</Typography>
                {
                    timer &&
                    <>
                        <img src={timerURL} alt={timerURL} style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        <Button variant="contained" color="primary" style={{ marginLeft: "auto", background: "#2874f0", borderRadius: "2px", fontSize: "13px" }}>View All</Button>
                    </>
                }

            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {products.map(product => (
                    <Link to={`/product/${product.id}`}>
                        <Box textAlign="center" className={classes.wrapper}>
                            <img src={product.url} alt={product.url} className={classes.image} />
                            <Typography style={{ fontSize: "14px", marginTop: "5px", fontWeight: 600, color: "#212121" }}>{product.title.shortTitle}</Typography>
                            <Typography style={{ fontSize: "14px", marginTop: "5px", color: "green" }}>{product.discount}</Typography>
                            <Typography style={{ fontSize: "14px", marginTop: "5px", opaciy: ".6", color: "#212121" }}>{product.tagline}</Typography>
                        </Box>
                    </Link>
                ))
                }

            </Carousel>
        </Box>
    )
}

export default Slide;