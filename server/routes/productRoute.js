import express from 'express'
import { upload } from '../configs/multer.js';
import authSeller from '../middlerware/authSeller.js';
import { addProduct, changeStock, productById, productList } from '../controllers/productController.js';

const productRounter = express.Router();

productRounter.post('/add',upload.array('images'), authSeller, addProduct);
productRounter.get('/list',productList)
productRounter.get('/id',productById)
productRounter.post('/stock', authSeller,  changeStock)


export default productRounter;