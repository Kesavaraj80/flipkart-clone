import { ImageURL } from "../../constants/data";
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
    }
})

const MidSection = () => {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Box className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <img src={image} alt={image} style={{ width: "33%" }} />
                    ))
                }
            </Box>
            <img src={coronaURL} alt={coronaURL} style={{ width: "100%",marginTop: "20px"}} />
        </>
    )
}

export default MidSection;