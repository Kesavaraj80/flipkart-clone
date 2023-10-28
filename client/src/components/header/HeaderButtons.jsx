import { Button, Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
// import { white } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {
    Link
} from "react-router-dom";
import {useContext, useState} from "react";

// Component
import LoginDialog from '../login/Login'
import {LoginContext} from '../../context/ContextProvider'
// Login Profile import
import Profile from './Profile';

const ColorButton = styled(Button)(() => ({
    color: "#2874f0",
    backgroundColor: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    marginRight: 50,
    '&:hover': {
        backgroundColor: "#FFFFFF",
    },
}));


const useStyle = makeStyles({
    wrapper: {
        margin: "0 7% 0 auto",
        display: "flex",
        alignItems: "center",
    },
    more: {
        marginRight: 50,
        fontSize: 12,
    },
    cartcontainer: {
        marginLeft: 50,
        fontSize: 12,
        display: "flex",
        textDecoration: "none",
        color:"#FFF"
    }
})

const HeaderButtons = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    const {account, setAccount} = useContext(LoginContext)
 
    const openLoginDialog = ()=>{
        setOpen(true)
    }
    return (
        <Box className={classes.wrapper} >
            {
               account ? <Profile account={account} setAccount={setAccount}/> :
                <ColorButton variant="contained" onClick={()=>openLoginDialog()}>Login</ColorButton>
            }
            <Typography className={classes.more}>More</Typography>
            <Link to='/cart' className={classes.cartcontainer}>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon  />
                </Badge>
                <Typography style={{marginLeft:'10px'}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}

export default HeaderButtons;