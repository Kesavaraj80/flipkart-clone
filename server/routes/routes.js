import express from 'express';

// fucntion imports
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts,getProductById } from '../controller/product-controller.js';


const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);
export default router;