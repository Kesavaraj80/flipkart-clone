import { Dialog, DialogContent, Typography, TextField, Button, makeStyles, Box } from '@material-ui/core';
import { useState } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api'

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: "35px 45px",
        '& >*': {
            color: '#FFFFFF',
            fontWeight: '600'
        }
    },
    login: {
        padding: "25px 45px",
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& >*': {
            marginTop: 20
        }
    },
    loginBtn: {
        textTransform: 'none',
        background: "#FB641B",
        color: '#FFFFFF',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: "#FFFFFF",
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'

    },
    createText: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    error:{
        fontSize:10,
        color:"#ff6161",
        marginTop:0,
        fontWeight:600
    }
})

const initialValue = {
    login: {
        view: "login",
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signUp: {
        view: "signup",
        heading: 'Looks line youre new here',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

const Login = ({ open, setOpen, setAccount }) => {
    const [account, toggleAccount] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const toggleUserccount = () => {
        toggleAccount(initialValue.signUp)
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }


    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.username)
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response){
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const classes = useStyle();
    return (
        <Dialog open={open} onClose={handleClose} contentStyle={{ width: "100%", maxWidth: "none" }} >
            <DialogContent className={classes.component}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: "20px" }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?

                            <Box className={classes.login}>
                                <TextField onChange={(e) => onValueChange(e)} name="username" label="Enter Email/Mobile number" />
                                <TextField onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                                {error && <Typography className={classes.error}>Invalid Credentials</Typography>}
                                <Typography className={classes.text} style={{
                                    marginTop: 20, color: '#878787',
                                    fontSize: '12px'
                                }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant="contained" onClick={() => loginUser()} className={classes.loginBtn}>Login</Button>
                                <Typography style={{
                                    marginTop: 20, textAlign: 'center', color: '#878787',
                                    fontSize: '12px'
                                }}>OR</Typography>
                                <Button variant="contained" className={classes.requestbtn}>Request OTP</Button>
                                <Typography onClick={() => toggleUserccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
                                <TextField onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
                                <TextField onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                                <TextField onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                                <TextField onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                                <TextField onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
                                <Button variant="contained" onClick={() => signupUser()} className={classes.loginBtn}>SignUp</Button>
                                {/* <Button variant="contained" className={classes.requestbtn}>Existing User?Log in</Button> */}
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;