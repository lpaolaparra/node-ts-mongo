import {Router, Request, Response} from 'express';
import { booksControl } from '../controllers/booksController';

const router: Router = Router(); // Router es un objeto de tipo router

router.get('/', booksControl.indexBook); //obtiene la lista de libros
router.get('/add',booksControl.renderFormBook);
router.post('/add',booksControl.saveBook);

export default router;