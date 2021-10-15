// vamos arrancar nuestro servidor

import express from 'express';
import exphbs  from 'express-handlebars';
import path from 'path';

// import routes
import indexRoute from './routes';
import booksRoute from './routes/books';
import './database';
//initializations
const app = express();
// importamos la base de datos


// Settings
app.set('port', process.env.PORT || 3000);

//direccion de las vistas
// esta linea es para decirle que la carpet views esta dentro de src
// tengo que decirle donde esta la carpeta views
console.log(path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views')); 
// vamos usar handlebars
//vamos a crear nuestra propia configuracion de handlebars
//estamos solo definiendo el engine o como fnciona el modulo de plantilla
app.engine('.hbs', exphbs({
    //configuraciones a traves de un objeto
    // como vamos a utilizar handlebars dentro de las vistas
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
// definición de nuestras vistas
app.set('view engine','.hbs');
// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/',indexRoute) // pagina principal 
app.use('/books',booksRoute);

//Static files
// definimos en donde va a estar la carpeta publica donde vamos a colocar con lo que el navegador pueda accederapp.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'public')));

// starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})
