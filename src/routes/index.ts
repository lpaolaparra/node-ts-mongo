import {Router, Request, Response} from 'express';
import { indexControl } from '../controllers/indexController';

const router: Router = Router(); // Router es un objeto de tipo router

router.get('/',indexControl.index);

// router.get('/add',(req: Request,res: Response)=>{
//     res.send('Form');
// })

// router.get('/about',(req,res)=> res.render('about') )

export default router;