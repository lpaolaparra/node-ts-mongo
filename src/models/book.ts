import mongoose, {Schema, Model, model} from "mongoose";

// podemos usar typescript para definir una interface y esta interface para heredar sus propiedades
// desde mongoose
// define el esquema de mi libro
export interface Book extends mongoose.Document{
    // este modelo lo puedo usar para validar mis datos desde afuera
    title: string,
    author: string,
    isbn: string
}
const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String
})
// una vez definido quiero generar un modelo a partir de dicho esquema
//vamos a darle un nombre llamado book dentro de la base de datos
// estoy definiendo un modelo llamado libro a partir del esquema que se ha definido
export default model<Book>('book',BookSchema);