import { navData } from '../../constants/data'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    main_component:{
        display: 'flex',
        margin: '70px 130px 10px',
        justifyContent:'space-between',
        // border:'2px black solid'
    },
    container:{
        textAlign: 'center',
        padding:'12px 8px'
    },
    image:{
        width:64
    },
    text:{
        fontSize:14,
        fontWeight:600
    }
})




const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.main_component}>
            {
                navData.map((data) => {
                    return (
                        <Box className={classes.container}>
                            <img src={data.url} alt={data.text} className={classes.image} />
                            <Typography className={classes.text}>{data.text}</Typography>
                        </Box>
                    )
                })
            }

        </Box>
    )
}

export default NavBar;