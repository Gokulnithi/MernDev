import express from 'express'
import {fetch,create,update,del} from '../Controller/userController.js';
const route123 = express.Router()
route123.get('/fetch',fetch);
route123.post('/create',create);
route123.put('/update/:id',update);
route123.delete('/delete/:id',del);
export default route123
