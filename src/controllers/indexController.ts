import {Request, Response} from 'express';

// esta clase lo que hace es devolvernos un objeto, no quiero devolver toda la clase en si

class indexController{

    public index (req: Request, res: Response){
        res.render('index',{ title: 'Welcome book App' });
        //res.send('Hello World!');
    }
}

export const indexControl = new indexController();
// export default indexController;