import { useState } from 'react';
import { Typography, Menu, MenuItem, makeStyles } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        marginTop: 40
    },
    text:{
        marginLeft:20,
        fontSize:14
    }
})
const Profile = ({ account, setAccount }) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const logout = () =>{
        setAccount('');
    }
    return (
        <>
            <Typography style={{ margiTop: 4, marginRight: 20,cursor:'pointer' }} onClick={handleClick}>{account}</Typography>
            <Menu
                id="simple-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                    <PowerSettingsNewIcon fontSize='small' color='primary' />
                    <Typography className={classes.text}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;