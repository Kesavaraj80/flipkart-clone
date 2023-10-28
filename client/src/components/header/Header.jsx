import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import {
    Link
} from "react-router-dom";

const useStyle = makeStyles({
    header: {
        height: 64
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0,
        textDecoration: "none",
        color:"#FFF"
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic",
        
    }
})

export default function Header() {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header} style={{ backgroundColor: "#2874f0" }}  >
            <Toolbar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} alt={logoURL}></img>
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <span style={{ color: '#FFE500' }}>Plus</span></Typography>
                        <img src={subURL} alt={subURL} className={classes.subURL}></img>
                    </Box>
                </Link>
                <SearchBar />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    )
}