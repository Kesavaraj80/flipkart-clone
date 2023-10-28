import Carousel from "react-material-ui-carousel"
import { bannerData } from '../../constants/data'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    image:{
        width: '100%',
        height: 280
    },
    carousel:{
        height:'auto',
        marginTop:20
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel 
        autoPlay={true} 
        className={classes.carousel}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                background:"#FFFFFF",
                color:"#494949",
                borderRadius:0,
                margin:0,
            }
        }}
        >
            {
                bannerData.map((image) => {
                    return (
                        <img src={image} alt={image} className={classes.image}/>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner;