import {Request, Response} from 'express';
import bookModel, { Book } from '../models/book'; // import el modelo
// el bookModel me permite guardarlo en la base de datos
// y Book me permite hacer una validación que es de tipo Book

// esta clase lo que hace es devolvernos un objeto, no quiero devolver toda la clase en si

class BooksController{

    public async indexBook(req: Request, res: Response): Promise<void> {
        // antes de pintar los libros en la vista, vamos a realizar una consulta 
        // a la base de datos
        const books: Book[] = await bookModel.find().lean(); // hace una busqueda desde mongoDB de todos mis libros
        console.log(books);
        // al ser una consulta esto va a tomar un tiempo por lo tanto se debe
        // manejar con una promesa o con un callback
        res.render('books/index',{
            title: 'Books',
            books
        })
    }

    public renderFormBook(req: Request, res: Response): void{
        res.render('books/add',{
            tilte: 'Add a Book'
        })
    }

    // metodo para que almacene los datos o para que los pueda procesar
    public async saveBook(req: Request, res: Response){
        const {title, author, isbn } = req.body
        const book: Book = new bookModel({title, author, isbn}); // genera un objeto desde mongo db
        // para poder guardar en la base de datos vamos a tenner que usar o una promesa, o un callback
        await book.save();
        res.redirect('/books');
    }
}

export const booksControl = new BooksController();
